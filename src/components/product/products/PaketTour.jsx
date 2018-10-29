import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import ProductCarousel from '../ProductCarousel';

export default class PaketTour extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            data: []
        }
    }
    componentWillMount() {
        fetch('/data/data_paket_tour.json')
            .then(res => res.json())
            .then(resp => this.setState({data: resp, loaded: true}))
    }
    render() {
        const { path } = this.props.match;
        const list = this.state.data.map((item, key) => {
            return (
                <NavLink key={key} style={{display: 'flex'}} className="col-sm-3" to={`${path}/${item.slug}`}>
                    <Card>
                        <CardImg top width="100%" src={item.image} alt={item.title} />
                        <CardBody className="p-2">
                            <h6 className="card-title">{item.title}</h6>
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </NavLink>
            )
        });
        return (
            <div className="content-wrap text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 pr-0 pl-0">
                            <ProductCarousel items={this.state.carousel} />
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}
