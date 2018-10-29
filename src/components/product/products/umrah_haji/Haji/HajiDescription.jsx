import React, { Component } from 'react'
import moneyIcon from '../../../../../assets/images/icons/money karung.png';

export default class HajiDescription extends Component {
    render() {
        return (
            <div id="HajiDescription" className="tab-pane active">
                <div className="row">
                    <h3 className="col-sm-12 caps font-weight-bold">PROGRAM IBADAH HAJI TAHUN 2018 M / 1439 H</h3>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row"><h5 className="mb-4 text-blue mt-3 font-weight-bold col-sm-12">Tipe Harga</h5>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">DOUBLE</h6>
                                        <h6 className="font-weight-bold">$13.500/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">TRIPLE</h6>
                                        <h6 className="font-weight-bold">$13.000/pax</h6>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img alt="" src={moneyIcon} style={{maxWidth: 50, padding: '0 0 1.72rem'}}/>
                                        <h6 className="font-weight-bold">QUAD</h6>
                                        <h6 className="font-weight-bold">$12.500/pax</h6>
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
