import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import HajiDescription from './HajiDescription';
import HajiItinerary from './HajiItinerary';
import HajiFasilitas from './HajiFasilitas';
import HajiTerm from './HajiTerm';
import gold from '../../../../../../assets/images/icons/gold_package.png';
import silver from '../../../../../../assets/images/icons/silver_package.png';
import regular from '../../../../../../assets/images/icons/regular_package.png';

export default class ProductUmrahHajiFasilitas extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div id="paketHaji" className="tab-pane active">
                <div className="col-lg-9 col-md-9 col-xs-12" style={{margin: 'auto'}}>
                    <div className="row pb-4 pt-4">
                        <div className="col-md-4"><img alt="" src={gold} style={{maxWidth: '100%'}}/></div>
                        <div className="col-md-4"><img alt="" src={silver} style={{maxWidth: '100%'}}/></div>
                        <div className="col-md-4"><img alt="" src={regular} style={{maxWidth: '100%'}}/></div>
                    </div>
                    <nav className="nav nav-pills nav-justified">
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/description`}>Deskripsi</NavLink>
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/itinerary`}>Itinerary</NavLink>
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/fasilitas`}>Fasilitas</NavLink>
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/term`}>Syarat & Ketentuan</NavLink>
                    </nav>
                    <div className="tab-content">
                        <Switch>
                            <Redirect from={path} to={`${path}/description`} exact/>
                            <Route exact path={`${path}/description`} component={HajiDescription}/>
                            <Route exact path={`${path}/itinerary`} component={HajiItinerary}/>
                            <Route exact path={`${path}/fasilitas`} component={HajiFasilitas}/>
                            <Route exact path={`${path}/term`} component={HajiTerm}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}