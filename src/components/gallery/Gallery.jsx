import React, { Component } from "react";
import { Nav, TabContent } from "reactstrap";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import GalleryDetail from './GalleryDetail';

export default class Gallery extends Component {
    constructor(props) {
        super()
        this.state = {
            firstSlug: '',
            isLoading: true,
            isLoaded: false,
            articles: []
        }
    }
    componentWillMount() {
        fetch('/data/data.json').then(res => res.json())
            .then(res => {
                console.log(res.Gallery[0].id_category)
                this.setState({
                    firstSlug: res.Gallery.length>0?res.Gallery[0].id_category:'',
                    isLoading: false,
                    isLoaded: true,
                    articles: res.Gallery
                })
            })
    }
    render() {
        const { path } = this.props.match;
        const items = this.state.articles.map((item, key) => {
            return (
                <NavLink key={item.id_category} className="nav-item nav-link sec-style" to={`${path}/${item.id_category}`}>{item.title}</NavLink>
            );
        });
        return (
            <div className="content-wrap container-fluid">
                <div className="container">
                    <Nav className="nav-justified" pills>
                        {items}
                    </Nav>
                    <TabContent>
                        <Switch>
                            <Redirect from={path} to={`${path}/${this.state.firstSlug}`} exact/>
                            <Route path={`${path}/:idCategory`}  component={GalleryDetail}/>
                        </Switch>
                    </TabContent>
                </div>
            </div>
        )
    }
}
