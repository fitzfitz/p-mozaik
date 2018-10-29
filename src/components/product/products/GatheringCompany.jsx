import React, { Component } from 'react'

export default class GatheringCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: true,
            carousel: [{
                image: '/assets/service/carousel',
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
                            <img className="card-img-top" src="/assets/home-slider/1. Tagline umrah mozaik - polos.jpg" alt=""/>
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
