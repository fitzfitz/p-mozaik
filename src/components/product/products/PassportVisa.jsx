import React, { Component } from 'react'
import ProductCarousel from '../ProductCarousel';

export default class PassportVisa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                id: 1,
                src: '/assets/product/slider/visa/3. Visa - polos.jpg',
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
                            <ProductCarousel items={this.state.carousel} />
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
