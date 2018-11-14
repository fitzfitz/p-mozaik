import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss';
import Logo from '../../assets/images/logo/Logo Mozaik - PNG 2.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        window.innerWidth <= 767 && (
            this.setState({
                isOpen: !this.state.isOpen
            })
        )
    }
    render() {
        return (
            <header className="page-header">
                <div className="header-top dark">
                    <div className="container">
                        <div className="row">
                            <div className="container-fluid">
                                <div className="float-left pt-1">
                                    <FontAwesomeIcon icon={['fas', 'phone']} /><span className="head-phone-no"> +62 21 8313444</span>
                                </div>
                                <div className="float-right social-links">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pesonamozaiktourandtravel/" className="fb-ic">
                                        <FontAwesomeIcon icon={['fab', 'facebook-square']} className="text-white" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pesonamozaik" className="tw-ic">
                                        <FontAwesomeIcon icon={['fab', 'twitter-square']} className="text-white" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pesona.mozaik/" className="ins-ic">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Navbar color="" light expand="md">
                        <NavLink className="navbar-brand" to="/">
                            <img src={Logo} style={{height: 100}} alt="logo" />
                        </NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink onClick={this.toggle} className="nav-link" to="/" exact>Home</NavLink>
                                </NavItem>
                                <NavItem className="dropdown-hover">
                                    <span className="nav-link">Produk kami</span>
                                    <div className="dropdown-content">
                                        <NavLink onClick={this.toggle} to="/product/paket_umrah_haji">Paket Umrah dan Haji</NavLink>
                                        <NavLink onClick={this.toggle} to="/product/paket_tour">Paket Tour</NavLink>
                                        <NavLink onClick={this.toggle} to="/product/paket_visa">Passport & Visa</NavLink>
                                        <NavLink onClick={this.toggle} to="/product/paket_gathering">Gathering Company</NavLink>
                                        <NavLink onClick={this.toggle} to="/product/paket_tiket">Tiket Pesawat & Kereta</NavLink>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggle} className="nav-link" to="/gallery">Gallery kami</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggle} className="nav-link" to="/about">Tentang kami</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggle} className="nav-link" to="/contact">Kontak kami</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        )
    }
}
