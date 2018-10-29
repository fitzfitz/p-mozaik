import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Product from "../product/Product";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import Contact from "../contact/Contact";

export default class Main extends Component {
    render() {
        return (
            <div className="content-wrap">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        )
    }
}
