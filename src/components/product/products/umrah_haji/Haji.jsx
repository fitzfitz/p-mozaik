import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import HajiDescription from './Haji/HajiDescription';
import HajiItinerary from './Haji/HajiItinerary';
import HajiFasilitas from './Haji/HajiFasilitas';
import HajiTerm from './Haji/HajiTerm';

export default class Haji extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div id="paketHaji" className="tab-pane active">
                <div className="col-lg-9 col-md-9 col-xs-12" style={{margin: 'auto'}}>
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