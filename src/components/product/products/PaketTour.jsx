import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import ProductCarousel from '../ProductCarousel';

export default class PaketTour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
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
            }]
        }
    }
    render() {
        const { path } = this.props.match;
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
                        <div className="col-sm-4">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
