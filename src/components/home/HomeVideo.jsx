import React, { Component } from 'react'

export default class HomeVideo extends Component {
    render() {
        return (
            <div className="container-fluid home-section bg-grey">
                <div className="container">
                    <h1 className="big-title">{this.props.data.title}</h1>
                    <div className="row justify-content-center">
                        <div className="embed-responsive embed-responsive-21by9">
                            <iframe title="Mozaik Youtube" className="embed-responsive-item" src={this.props.data.source} allowFullScreen></iframe>
                        </div>
                        <a className="text-center p-4" target="_blank" rel="noopener noreferrer" href={this.props.data.uri} >Muat lebih banyak >></a>
                    </div>
                </div>
            </div>
        )
    }
}
