import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeService extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (
                <div key={item.slug} className="thumbnail-md-text col-md-4 col-xs-12">
                    <Link to={`/product/${item.slug}`}>
                        <div className="card-wrap bg-image-center" style={{backgroundImage: `url(${item.image})`}}>
                            <div className="card-body">
                                <p className="card-text">{item.title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });

        return (
            <div id="homeService" className="container-fluid home-section bg-grey">
                <div className="container">
                    <h1 className="big-title">{this.props.data.title}</h1>
                    <div className="row justify-content-center">
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}
