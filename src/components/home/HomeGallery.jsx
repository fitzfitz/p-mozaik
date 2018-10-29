import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeGallery extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (
                <div className="thumbnail-md-text col-md-4 col-xs-12" key={item.title}>
                    <Link to={`/gallery/${item.slug}`}>
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
            <div id="homeGallery" className="container-fluid home-section">
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
