import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Product.scss';
import ProductUmrahHaji from "./products/UmrahHaji";
// import ProductUmrahHajiFasilitas from "./products/umrah_haji/Haji/fasilitas/Fasilitas";
import ProductTour from "./products/PaketTour";
// import TourList from "./products/paket_tour/TourList";
// import TourDetails from "./products/paket_tour/TourDetails";
import ProductPassportVisa from "./products/PassportVisa";
import ProductGathCompany from "./products/GatheringCompany";
import ProductTiket from "./products/TiketPesawatKereta";

export default class Product extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                <Redirect exact from={`${path}`} to={`${path}/paket_umrah_haji`}/>
                <Route path={`${path}/paket_umrah_haji`} component={ProductUmrahHaji}/>
                {/* <Route path={`${path}/haji-fac/madinah`} component={ProductUmrahHajiFasilitas}/> */}
                <Route path={`${path}/paket_tour`} component={ProductTour}/>
                {/* <Route exact path={`${path}/paket_tour/:slug`} component={TourList}/> */}
                {/* <Route exact path={`${path}/tour_detail/:slug`} component={TourDetails}/> */}
                <Route exact path={`${path}/paket_visa`} component={ProductPassportVisa}/>
                <Route exact path={`${path}/paket_gathering`} component={ProductGathCompany}/>
                <Route exact path={`${path}/paket_tiket`} component={ProductTiket}/>
            </Switch>
        )
    }
}
