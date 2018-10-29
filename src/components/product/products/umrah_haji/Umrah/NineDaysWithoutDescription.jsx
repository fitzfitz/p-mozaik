import React, { Component } from 'react'
import moneyIcon from '../../../../../assets/images/icons/money karung.png';

export default class NineDaysWithoutDescription extends Component {
    render() {
        return (
            <div id="UmrahNineDaysWithoutDescription" className="tab-pane active">
                <p>PAKET UMRAH REGULER 9 HARI<br />By Saudi Airlines (Madinah) TANPA 2X Shalat Jum'at<br />dengan berbagai fasilitas hotel berbintang 5, 4 dan 3.</p>
                <div className="row">
                    <h3 className="col-sm-12 caps font-weight-bold">PAKET 9 HARI (OKTOBER) 2018</h3>
                    <div className="col-sm-12">
                        <h5 className="text-blue mt-3 font-weight-bold">Jadwal Keberangkatan</h5>
                        <p>
                            - 8 Oktober 2018
                        </p>
                    </div>
                    <div className="col-sm-6 border-left-resp">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="text-blue mt-3 font-weight-bold">Fasilitas Hotel *5</h5>
                                <p>
                                    Hotel Madinah: Millenium Aqeeq *5 (50m)<br />
                                    Hotel Makkah: Sofwah Orchid *5 (50m)
                                </p>
                            </div>
                            <div className="col-sm-12">
                                <div className="row"><h5 className="mb-4 text-blue mt-3 font-weight-bold col-sm-12">Tipe Harga</h5>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">DOUBLE</h6>
                                        <h6 className="font-weight-bold">$2.375/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">TRIPLE</h6>
                                        <h6 className="font-weight-bold">$2.175/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">QUAD</h6>
                                        <h6 className="font-weight-bold">$2.075/pax</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="text-blue mt-3 font-weight-bold">Fasilitas Hotel *4</h5>
                                <p>
                                    Hotel Madinah: Al Saha *4 4N (200m)<br />
                                    Hotel Makkah: Makareem Ajyad *4 4N (200m)
                                </p>
                            </div>
                            <div className="col-sm-12">
                                <div className="row"><h5 className="mb-4 text-blue mt-3 font-weight-bold col-sm-12">Tipe Harga</h5>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">DOUBLE</h6>
                                        <h6 className="font-weight-bold">$1.850/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">TRIPLE</h6>
                                        <h6 className="font-weight-bold">$1.750/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">QUAD</h6>
                                        <h6 className="font-weight-bold">$1.675/pax</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="text-blue mt-3 font-weight-bold">Fasilitas Hotel *3</h5>
                                <p>
                                    Hotel Madinah: Fayrouzia Alkher *3 4N (200m)<br />
                                    Hotel Makkah: Fajr Badie 2 *3 4N (300m)
                                </p>
                            </div>
                            <div className="col-sm-12">
                                <div className="row"><h5 className="mb-4 text-blue mt-3 font-weight-bold col-sm-12">Tipe Harga</h5>
                                    <div className="col-sm-4">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">DOUBLE</h6>
                                        <h6 className="font-weight-bold">$1.750/pax</h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">TRIPLE</h6>
                                        <h6 className="font-weight-bold">$1.650/pax</h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">QUAD</h6>
                                        <h6 className="font-weight-bold">$1.575/pax</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
