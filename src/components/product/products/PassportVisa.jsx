import React, { Component } from 'react'

export default class PassportVisa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                image: '/assets/service/carousel',
                title: 'PASSPORT & VISA',
                descTop: null,
                descMid: 'Kami melayani jasa rekomendasi passport dan pembuatan visa untuk keluar negri.'
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
                    <p>Sesuai dengan PMA No. 18 Tahun 2015, Pesona Mozaik memiliki izin dan telah memenuhi syarat untuk membuka pelayanan pembuatan visa yang sesuai dengan kontrak kerjasama di Arab Saudi yang telah disahkan oleh notaris bersertifikasi IATA. Kami dapat memberikan layanan dan dukungan bagi anda yang membutuhkan pengurusan rekomendasi paspor, pembuatan visa, exit permit dan dokumen imigrasi lainnya.</p>
                </div>
                
            </div>
        )
    }
}
