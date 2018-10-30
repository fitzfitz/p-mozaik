import React, { Component } from 'react'

export default class HomeTestimoni extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (
                <div key={item.name} className="home-advantage home-testimoni col-md-3 col-sm-4">
                    <div className="card card-wrap no-bg no-bg">
                        <div className="card-image">
                            <div className="bg-image-center" style={{backgroundImage: `url(${item.image})`}}></div>
                        </div>
                        <div className="card-body">
                            <h5 className="text-grey card-text font-weight-bold">{item.name}</h5>
                            <h5 className="text-greyish card-text">{item.title}</h5>
                            <p className="card-text">{item.comment}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="container-fluid home-section bg-grey">
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
