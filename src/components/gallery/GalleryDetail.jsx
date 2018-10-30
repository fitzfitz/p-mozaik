import React, { Component } from 'react'
// import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Lightbox from 'lightbox-react'

export default class GalleryDetail extends Component {
    constructor(props) {
        super()
        this.state = {
            // modal: false,
            isLoading: true,
            isLoaded: false,
            title: '',
            articles: [],
            imageSet: [],
            photoIndex: 0,
            isOpen: false,
        }
    }
    componentWillMount() {
        fetch('/data/data.json').then(res => res.json())
            .then(res => {
				const is = p => p.id_category === this.props.match.params.idCategory;
                this.setState({
                    isLoading: false, 
                    isLoaded: true,
                    title: res.Gallery.find(is).title,
                    articles: res.Gallery.find(is).data
                })
            })
    }
    componentWillReceiveProps(newProps) {
        fetch('/data/data.json').then(res => res.json())
            .then(res => {
				const is = p => p.id_category === newProps.match.params.idCategory;
                this.setState({
                    isLoading: false, 
                    isLoaded: true,
                    title: res.Gallery.find(is).title,
                    articles: res.Gallery.find(is).data,
                })
            })
    }
    toggle = (e) => {
        this.setState({imageSet: e, isOpen: true})
    }
    render() {
        const { imageSet, photoIndex, isOpen } = this.state;
        const items = this.state.articles.map((item, key) => {
            return (
                <div key={key} onClick={() => this.toggle(item.srcSet)} className="thumbnail-md-text col-md-4 col-xs-12">
                    <div className="card-wrap bg-image-center" style={{backgroundImage: `url('${item.src}')`}}>
                        <div className="card-body">
                            <p className="card-text">{item.caption}</p>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div id="GalleryPerjalananUmrah" className="tab-pane fade in active show">
                <h2 style={{ lineHeight: 2 }} className="font-weight-bold text-center mb-2 bg-yellow text-blue">{this.state.title}</h2>
                <div className="row">
                    {items}
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={imageSet[photoIndex]}
                        nextSrc={imageSet[(photoIndex + 1) % imageSet.length]}
                        prevSrc={imageSet[(photoIndex + imageSet.length - 1) % imageSet.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + imageSet.length - 1) % imageSet.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % imageSet.length,
                        })}
                    />
                )}
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ textAlign: 'center' }}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                </Modal> */}
            </div>
        )
    }
}
