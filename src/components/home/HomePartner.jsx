import React, { Component } from 'react'

export default class HomePartner extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (
                <li key={item.image} className="partner-logo"><img alt="" src={item.image} /></li>
            );
        });
        return (
            <div className="container-fluid home-section">
                <div className="container">
                    <h1 className="big-title">{this.props.data.title}</h1>
                    <ul className="row justify-content-center partners-list">
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}
