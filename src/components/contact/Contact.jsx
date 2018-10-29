import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="content-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="embed-responsive embed-responsive-21by9" style={{margin: 0}}>
                            <iframe title="Mozaik Maps" className="embed-responsive-item" src="https://maps.google.com/maps?q=Pesona%20Mozaik%20Tour%20%26%20Travel&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
                        </div>
                    </div>    
                </div>
                <div className="container-fluid bg-white home-section pt-0">
                    <div className="row">
                        <h1 className="big-title text-white bg-blue mb-5 pt-4 pb-4 col-sm-12">Request Paket Perjalanan</h1>
                        <div className="container">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-sm-3 col-form-label">Nama</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="group_name" className="col-sm-3 col-form-label">Nama Grup</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="group_name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="pax" className="col-sm-3 col-form-label">Berapa Pax*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="pax" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="telp" className="col-sm-3 col-form-label">No.Telepon/HP*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="telp" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="hometown" className="col-sm-3 col-form-label">Kota Asal*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="hometown" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="form-group row">
                                            <label htmlFor="destination" className="col-sm-3 col-form-label">Destinasi*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="destination" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="package" className="col-sm-3 col-form-label">Pilihan Paket*</label>
                                            <div className="col-sm-9">
                                                <select defaultValue={1} id="package" className="form-control" required>
                                                    <option value="1">Paket Umroh 9 Hari</option>
                                                    <option value="2">...</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="keberangkatan" className="col-sm-3 col-form-label">Keberangkatan*</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" id="keberangkatan" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="kepulangan" className="col-sm-3 col-form-label">Kepulangan*</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" id="kepulangan" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="note" className="col-sm-3 col-form-label">Note</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" id="note" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="form-control big-title text-white bg-blue mb-4 pt-4 pb-4 col-sm-12">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white home-section">
                    <div className="row">
                        <h1 className="big-title text-blue bg-white mb-5 pt-4 pb-4 col-sm-12">Kantor Cabang</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Jawa Barat</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Jawa Tengah</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Jawa Timur</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Provinsi Bali</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Banda Aceh</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Sumatera</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Kalimantan</h5>
                                </div>
                                <div className="col-lg-3 col-xs-12 pl-2 pr-2">
                                    <h5 className="bg-red text-white pb-4 pt-4 text-center">Sulawesi</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-grey home-section">
                    <div className="row">
                        <div className="container bg-white">
                            <div className="row">
                                <h5 className="big-title text-blue bg-yellow mb-3 pt-4 pb-4 col-sm-12">Jawa Barat</h5>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-white home-section">
                    <div className="row">
                        <div className="container bg-white">
                            <div className="row">
                                <h5 className="big-title text-blue bg-yellow mb-3 pt-4 pb-4 col-sm-12">Jawa Tengah</h5>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xs-12 mb-3">
                                    <div className="card no-border">
                                        <h6 className="card-title text-grey bg-cloud p-2 m-0 col-sm-12 text-center font-weight-bold">Serang</h6>
                                        <div className="card-body">
                                            <p className="card-text">
                                                PT. PESONA MOZAIK CABANG SERANG<br/>
                                                Komp. Lebak Indah Blok D 20 No. 12<br/>
                                                Rt.04/Rw.05 Kel. Terondol<br/>
                                                Kec. Serang Serang Banten<br/>
                                                Email : tasmatas_jaya@yahoo.com<br/>
                                                HERNI NOVITASARI : <br/>
                                                +62 811 120 423<br/>
                                                +62 8787 122 3796<br/>
                                            </p>
                                        </div>
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
