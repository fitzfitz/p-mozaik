import React, { Component } from 'react';

export default class TiketPesawatKereta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                image: '/assets/service/carousel',
                title: 'TIKET PESAWAT DAN KERETA',
                descTop: null,
                descMid: null
            }]
        }
    }
    render() {
        return (
            <div className="content-wrap text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 pr-0 pl-0">
                            <img className="card-img-top" src="/assets/home-slider/1. Tagline umrah mozaik - polos.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <p>Kami memiliki layanan pemesanan tiket pesawat dan kereta, sesuai dengan tujuan perjalanan yang anda inginkan berupa harga yang kompetitif. Untuk pemesanannya, bisa hubungi hotli9ne kami untuk kunjungi langsung kantor pusat kami maupun cabang Mozaik sesuai domisili.</p>
                    <br/><br/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="thumbnail-md-text col-md-6 col-xs-12">
                                <div className="card-wrap bg-image-center" style={{backgroundImage: `url('/assets/assets/other/corporate-sponsorship1.jpg')`}}></div>
                            </div>
                            <div className="thumbnail-md-text col-md-6 col-xs-12">
                                <div className="card-wrap bg-image-center" style={{backgroundImage: `url('/assets/assets/other/corporate-sponsorship1.jpg')`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
