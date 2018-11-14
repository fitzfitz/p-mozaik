import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom';
import Group from './Umrah/Group';
import TenDays from './Umrah/TenDays';
import NineDays from './Umrah/NineDays';

export default class Umrah extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div id="paketUmrah" className="tab-pane active">
                <div className="container">
                    <nav className="row justify-content-center nav nav-pills nav-justified">
                        <NavLink className="head col-lg-3 col-md-3 col-xs-12 nav-item nav-link" to={`${path}/group`}>
                            <div className="card card-wrap">
                                <div className="card-body">
                                    <h2 className="card-text">Paket Group</h2>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="head col-lg-3 col-md-3 col-xs-12 nav-item nav-link" to={`${path}/ten_days`}>
                            <div className="card card-wrap">
                                <div className="card-body">
                                    <h2 className="card-text">Paket 10 Hari</h2>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className="head col-lg-3 col-md-3 col-xs-12 nav-item nav-link" to={`${path}/nine_days`}>
                            <div className="card card-wrap">
                                <div className="card-body">
                                    <h2 className="card-text">Paket 9 Hari</h2>
                                </div>
                            </div>
                        </NavLink>
                    </nav>
                    <div className="tab-content">
                        <Switch>
                            {/* <Redirect from={path} to={`${path}/group`} exact/> */}
                            <Route path={`${path}`} exact render={()=>
                                <div className="text-center"><div className="pl-3 pr-3">Untuk paket umrah, kami tersedia dalam 3 paket, yaitu Paket Group, Paket 10 Hari dan Paket 9 Hari. Selain itu kami juga menyediakan paket promo, paket milad dan paket umrah plus pada musim tertentu.</div><br/>
                                <a href="/assets/product/download/New brosur Jan - Mar 2019 - 4.pdf" target="_blank">Download Brosur Paket Umrah Mozaik Periode Oktober/Desember 2018 dan Januari/Maret 2019</a>
                                </div>
                            }/>
                            <Route path={`${path}/group`} component={Group}/>
                            <Route path={`${path}/ten_days`} component={TenDays}/>
                            <Route path={`${path}/nine_days`} component={NineDays}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}