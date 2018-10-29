import React, { Component } from 'react'
import moneyIcon from '../../../../../assets/images/icons/money karung.png';

export default class GroupDescription extends Component {
    render() {
        return (
            <div id="UmrahGroupDesc" className="tab-pane active">
                <div className="row">
                    <h3 className="col-sm-12 caps font-weight-bold">Paket Group</h3>
                    <div className="col-sm-4 align-items-center">
                        <p className="card-text">PAKET UMRAH REGULER 9 HARI<br />By Saudia Airlines (Jeddah 2x Shalat Jum'at) dengan fasilitas hotel berbintang 3</p>
                        <br/>
                        <h5 className="text-blue font-weight-bold">Jadwal Keberangkatan</h5>
                        <br/>
                        <p className="card-text">* Sesuai request dengan minimal 45 jamaah hingga Oktober 2018</p>
                        <br/>
                        <h5 className="text-blue font-weight-bold">Fasilitas</h5>
                        <br/>
                        <p className="card-text">Hotel Madinah: Zahri Alkher *3 3N (250m)</p>
                        <p className="card-text">Hotel Mak kah: Zoar Al-Baith *3 4N (350m)</p>
                    </div>
                    <div className="col-sm-8" style={{display: 'flex', alignItems: 'center'}}>
                        <div className="row"><h5 className="mb-4 text-blue font-weight-bold col-sm-12">Tipe Harga</h5>
                        <div className="col-sm-4 text-center">
                            <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                            <h6 className="font-weight-bold">DOUBLE</h6>
                            <h6 className="font-weight-bold">Rp. 21.000.000/pax</h6>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                            <h6 className="font-weight-bold">TRIPLE</h6>
                            <h6 className="font-weight-bold">Rp. 21.000.000/pax</h6>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                            <h6 className="font-weight-bold">QUAD</h6>
                            <h6 className="font-weight-bold">Rp. 21.000.000/pax</h6>
                        </div></div>
                    </div>
                </div>
            </div>
        )
    }
}
