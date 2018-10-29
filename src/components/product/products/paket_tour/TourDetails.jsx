import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import ProductCarousel from '../../ProductCarousel';
import moneyIcon from '../../../../assets/images/icons/money karung.png';

export default class TourDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
            loaded: false,
            carousel: [{
                id: 1,
                src: '/assets/product/slider/tour/1. MT Eropa - polos.jpg',
                title: 'PAKET MUSLIM TOUR',
                descTop: null,
                descMid: 'EROPA'
            }, {
                id: 2,
                src: '/assets/product/slider/tour/2. MT Asia - polos.jpg',
                title: 'PAKET MUSLIM TOUR',
                descTop: null,
                descMid: 'ASIA'
            }, {
                id: 3,
                src: '/assets/product/slider/tour/3. MT Timur Tengah - polos.jpg',
                title: 'PAKET MUSLIM TOUR',
                descTop: null,
                descMid: 'TIMUR TENGAH'
            }, {
                id: 4,
                src: '/assets/product/slider/tour/4. MT Domestik - polos.jpg',
                title: 'PAKET MUSLIM TOUR',
                descTop: null,
                descMid: 'DOMESTIK'
            }],
            product: {
                images: []
            }
        }
    }
    componentWillMount() {
        fetch('/data/data_tour_detail.json')
            .then(res => res.json())
            .then(resp => {
                const product = resp.find(item => item.slug === this.props.match.params.slug);
                this.setState({product, loaded: true})
            })
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div className="content-wrap text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 pr-0 pl-0">
                            <ProductCarousel items={this.state.carousel} />
                        </div>
                    </div>
                </div>
                <div className="container text-left pt-5 pb-3">
                    {this.state.product && (
                        <div className="row">
                            <div className="col-sm-4">
                                {this.state.product.images.map((item, key) => {
                                    return (
                                        <img key={key} src={item.image} className="col-sm-12 pb-2" alt="" />
                                    )
                                })}
                            </div>
                            <div className="col-sm-8">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                            Deskripsi
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                            Itinerary
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                                            Fasilitas
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                                            Syarat & Ketentuan
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Col sm="12">
                                            <h6 className="caps font-weight-bold">{this.state.product.title} - {this.state.product.name}</h6>
                                            <p className="caps font-weight-bold">{this.state.product.description}</p>
                                            <h6 className="caps font-weight-bold">{this.state.product.time}</h6>
                                            <br/><br/>
                                            <article>
                                                <img className="img-fluid float-left mr-2" width={35} src={moneyIcon} alt="" />
                                                <h6 className="font-weight-bold">Rp. {this.state.product.price},- / 15 pax</h6>
                                                *Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya
                                            </article>
                                            <br/>
                                            <p className="font-weight-bold">Lokasi Tujuan :</p>
                                            <p>{this.state.product.tujuan}</p>
                                            <br/>
                                            <h6 className="font-weight-bold">Periode Keberangkatan :</h6>
                                            <p>*by request</p>
                                        </Col>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Col sm="12">
                                            {this.state.product.itinerary}
                                        </Col>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Col sm="12">
                                            {this.state.product.facility}
                                        </Col>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Col sm="12">
                                            {this.state.product.s_k}
                                        </Col>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
