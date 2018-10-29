import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import NineDaysWith from './NineDaysWith';
import NineDaysWithout from './NineDaysWithout';

export default class NineDays extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div id="paketNineDays" className="tab-pane active" style={{margin: 'auto'}}>
                <div className="col-lg-9 col-md-9 col-xs-12" style={{margin: 'auto'}}>
                    <nav className="nav nav-pills nav-justified">
                        <NavLink to={`${path}/with_2x_shalat`} className="nav-item nav-link small-text">PAKET UMRAH REGULAR 9 HARI 2X SHALAT JUMAT</NavLink>
                        <NavLink to={`${path}/without_2x_shalat`} className="nav-item nav-link small-text">PAKET UMRAH REGULAR 9 HARI TANPA 2X SHALAT JUMAT</NavLink>
                    </nav>
                    <div className="tab-content row">
                        <Switch>
                            <Redirect exact from={path} to={`${path}/with_2x_shalat`}/>
                            <Route path={`${path}/with_2x_shalat`} component={NineDaysWith}/>
                            <Route path={`${path}/without_2x_shalat`} component={NineDaysWithout}/> 
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
