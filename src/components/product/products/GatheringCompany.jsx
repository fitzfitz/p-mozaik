import React, { Component } from 'react'
import ProductCarousel from '../ProductCarousel';

export default class GatheringCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                id: 1,
                src: '/assets/product/slider/company/4. Gathering company - polos.jpg',
                title: 'GATHERING COMPANY',
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
                            <ProductCarousel items={this.state.carousel} />
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <p>Kami memiliki layanan untuk mengelola perjalanan umrah, domestik tour maupun muslim tour dalam bentuk group maupun tim dalam sistem kerjasama dengan<br/>perusahaan untuk tujuan destinasi yang tersedia.<br/>Sistem kerjasama yang kami sediakan, berupa program kegiatan seperti gathering, outing maupun outbound untuk tour non umrah.</p>
                </div>
            </div>
        )
    }
}
