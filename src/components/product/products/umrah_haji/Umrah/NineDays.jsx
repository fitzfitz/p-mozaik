import React, {Component} from 'react';
import { NavLink, Switch, Redirect, Route } from 'react-router-dom';
import NineDaysDescription from './NineDaysDescription';
import NineDaysItinerary from './NineDaysItinerary';
import GroupTerm from './GroupTerm';

export default class NineDays extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div id="paketNineDays" className="row tab-pane active">
                <div className="col-lg-9 col-md-9 col-xs-12" style={{margin: 'auto'}}>
                    <nav className="nav nav-pills nav-justified">
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/description`}>Deskripsi</NavLink>
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/itinerary`}>Itinerary</NavLink>
                        <NavLink className="nav-item nav-link sec-style" to={`${path}/term`}>Syarat & Ketentuan</NavLink>
                    </nav>
                    <div className="tab-content">
                        <Switch>
                            <Redirect from={path} to={`${path}/description`} exact/>
                            <Route exact path={`${path}/description`} component={NineDaysDescription}/>
                            <Route exact path={`${path}/itinerary`} component={NineDaysItinerary}/>
                            <Route exact path={`${path}/term`} component={GroupTerm}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}