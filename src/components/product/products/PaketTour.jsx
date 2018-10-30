import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductCarousel from '../ProductCarousel';
import TourDetails from './paket_tour/TourDetails';
import TourListHeader from './paket_tour/TourListHeader';
import TourList from './paket_tour/TourList';

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
                <Switch>
                    <Route exact path={`${path}`} component={TourListHeader}/>
                    <Route path={`${path}/list/:slug`} component={TourList}/>
                    <Route path={`${path}/detail/:slug`} component={TourDetails}/>
                </Switch>
            </div>
        )
    }
}
