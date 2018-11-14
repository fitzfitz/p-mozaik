import React, { Component } from 'react'
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <div className="footer-copyright text-center py-3">Follow social media kami : </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="mb-2">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pesonamozaiktourandtravel/" className="fb-ic">
                                <FontAwesomeIcon icon={['fab', 'facebook-square']} className="fa-lg white-text mr-md-2 ml-md-2 mr-3 fa-3x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pesonamozaik" className="tw-ic">
                                <FontAwesomeIcon icon={['fab', 'twitter-square']} className="fa-lg white-text mr-md-2 ml-md-2 mr-3 fa-3x" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pesona.mozaik/" className="ins-ic">
                                <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-lg white-text mr-md-2 ml-md-2 mr-3 fa-3x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">©Copyright 2016 
                    <a target="_blank" href="/"> PT. Pesona Mozaik. </a> All Rights Reserved
                </div>
            </footer>
        )
    }
}