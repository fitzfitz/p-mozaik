import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Umrah from './umrah_haji/Umrah';
import Haji from './umrah_haji/Haji';
import ProductCarousel from '../ProductCarousel';

export default class UmrahHaji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                id: 1,
                src: '/assets/product/slider/umrah/1. Umrah Reguler - polos.jpg',
                title: 'PAKET REGULAR',
                descTop: 'PAKET UMRAH REGULER 9 & 10 HARI',
                descMid: 'Paket Umrah dengan fasilitas hotel berbintang 3 dengan pesawat Saudi Airlines.'
            }, {
                id: 2,
                src: '/assets/product/slider/umrah/2. Umrah Gold - polos.jpg',
                title: 'PAKET GOLD',
                descTop: 'PAKET UMRAH REGULER 9 & 10 HARI',
                descMid: 'Paket Umrah dengan fasilitas hotel berbintang 5 dengan pesawat Saudi Airlines.'
            }, {
                id: 3,
                src: '/assets/product/slider/umrah/3. Umrah Silver - polos.jpg',
                title: 'PAKET SILVER',
                descTop: 'PAKET UMRAH REGULER 9 & 10 HARI',
                descMid: 'Paket Umrah dengan fasilitas hotel berbintang 4 dengan pesawat Saudi Airlines.'
            }, {
                id: 4,
                src: '/assets/product/slider/umrah/4. Haji - polos.jpg',
                title: 'PAKET HAJI',
                descTop: 'PAKET UMRAH REGULER 9 & 10 HARI',
                descMid: 'Paket Umrah dengan fasilitas hotel berbintang 5 dengan pesawat Saudi Airlines DAN MAKTAB vvip 112.'
            }]
        }
    }
    render() {
        const { path } = this.props.match;
        return (
            <div className="content-wrap container-fluid">
                <div className="row">
                    <div className="col-sm-12 pr-0 pl-0">
                        <ProductCarousel items={this.state.carousel} />
                    </div>
                    <div className="col-sm-12 pr-0 pl-0">
                        <nav className="nav nav-pills nav-justified">
                            <NavLink to={`${path}/umrah`} className="nav-item nav-link">Paket Umrah</NavLink>
                            <NavLink to={`${path}/haji`} className="nav-item nav-link">Paket Haji</NavLink>
                        </nav>
                        <div className="tab-content">
                            <Switch>
                                <Redirect exact from={path} to={`${path}/umrah`}/>
                                <Route path={`${path}/umrah`} component={Umrah}/>
                                <Route path={`${path}/haji`} component={Haji}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}