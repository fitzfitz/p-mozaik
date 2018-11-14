import React, { Component } from 'react';
import LoadSpinner from '../other/LoadSpinner';
import './Contact.scss';

const contact = 'http://www.mozaik.cucudukun.net/send_email';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isSuccess: false,
            name: '',
            group_name: '',
            pax: '',
            telp: '',
            hometown: '',
            email: '',
            destination: '',
            packages: '',
            keberangkatan: '',
            kepulangan: '',
            note: '',
            branch: [],
            branchFetching: false
        }
    }
    componentWillMount() {
        this.setState({branchFetching: true})
        fetch('/data/data_branch.json')
            .then(res => res.json())
            .then(resp => {
                this.setState({branch: resp, branchFetching: false})
            })
            .catch(err => this.setState({branchFetching: false}))
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    submitForm = (e) => {
        this.setState({isLoading: true})
        e.preventDefault()
        var formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('group_name', this.state.group_name);
        formData.append('pax', this.state.pax);
        formData.append('telp', this.state.telp);
        formData.append('hometown', this.state.hometown);
        formData.append('email', this.state.email);
        formData.append('destination', this.state.destination);
        formData.append('packages', this.state.packages);
        formData.append('keberangkatan', this.state.keberangkatan);
        formData.append('kepulangan', this.state.kepulangan);
        formData.append('note', this.state.note);
        fetch(contact, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(res => res.json())
        .then(resp => {
            this.setState({isLoading: false, isSuccess: true})
            console.log(resp)
        })
        .catch(err => {
            this.setState({isLoading: false, isSuccess: true})
            console.log(err)
        })
    }
    render() {
        return (
            <div className="content-wrap" style={{ overflow: 'hidden' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="embed-responsive embed-responsive-21by9" style={{margin: 0}}>
                            <iframe title="Mozaik Maps" className="embed-responsive-item" src="https://maps.google.com/maps?q=Pesona%20Mozaik%20Tour%20%26%20Travel&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
                        </div>
                    </div>    
                </div>
                <div className="container bg-white home-section pt-0">
                    <div className="">
                        <h1 className="big-title text-white bg-blue mb-5 pt-4 pb-4 col-sm-12">Request Paket Perjalanan</h1>
                        <div className="container">
                            <form onSubmit={this.submitForm}>
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-sm-3 col-form-label">Nama</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="group_name" className="col-sm-3 col-form-label">Nama Grup</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="group_name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="pax" className="col-sm-3 col-form-label">Berapa Pax*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="pax" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="telp" className="col-sm-3 col-form-label">No.Telepon/HP*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="telp" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="hometown" className="col-sm-3 col-form-label">Kota Asal*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="hometown" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-sm-3 col-form-label">Email*</label>
                                            <div className="col-sm-9">
                                                <input type="email" className="form-control" onChange={this.handleChange} id="email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="form-group row">
                                            <label htmlFor="destination" className="col-sm-3 col-form-label">Destinasi*</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" onChange={this.handleChange} id="destination" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="packages" className="col-sm-3 col-form-label">Pilihan Paket*</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" onChange={this.handleChange} id="packages" required>
                                                    <option value=""></option>
                                                    <option value="Paket Umroh 9 Hari">Paket Umroh 9 Hari</option>
                                                    <option value="Paket Umroh 9 Hari (2x Sholat Jum'at)">Paket Umroh 9 Hari (2x Sholat Jum'at)</option>
                                                    <option value="Paket Umroh 10 hari">Paket Umroh 10 hari</option>
                                                    <option value="Paket Umroh 10 Hari (2x Sholat Jum'at)">Paket Umroh 10 Hari (2x Sholat Jum'at)</option>
                                                    <option value="Paket Umroh + City Tour Dubai">Paket Umroh + City Tour Dubai</option>
                                                    <option value="Paket Umroh + Turki">Paket Umroh + Turki</option>
                                                    <option value="Paket Umroh + Aqsa">Paket Umroh + Aqsa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="keberangkatan" className="col-sm-3 col-form-label">Keberangkatan*</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" onChange={this.handleChange} id="keberangkatan" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="kepulangan" className="col-sm-3 col-form-label">Kepulangan*</label>
                                            <div className="col-sm-9">
                                                <input type="date" className="form-control" onChange={this.handleChange} id="kepulangan" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="note" className="col-sm-3 col-form-label">Note</label>
                                            <div className="col-sm-9">
                                                <textarea className="form-control" onChange={this.handleChange} id="note" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.isLoading ? (
                                        <div className="col-sm-12 row justify-content-center">
                                            <LoadSpinner bg="2c3280" className="form-control text-white text-center mb-4" />
                                        </div>
                                    ) : (
                                        this.state.isSuccess ? (
                                            <div className="col-sm-12 row justify-content-center">
                                                <LoadSpinner type="success" className="text-white text-center mb-4" />
                                            </div>
                                        ) : (
                                            <button type="submit" className="form-control big-title text-white bg-blue mb-4 pt-4 pb-4 col-sm-12">Submit Request</button>
                                        )
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container bg-white home-section">
                    <div className="row">
                        <h1 className="big-title text-blue bg-white mb-5 pt-4 pb-4 col-sm-12">Kantor Cabang</h1>
                        {this.state.branchFetching ? (
                            <div className="container contact-branches">
                                <div className="row justify-content-center">
                                    <LoadSpinner bg="2c3280" />
                                </div>
                            </div>
                        ) : (
                            <div className="container contact-branches">
                                <div className="fitz-list-wrap">
                                    {this.state.branch.map((item, key) => {
                                        return (
                                            <div key={key} className="fitz-list">
                                                <label>{item.state} :</label>
                                                <ul>
                                                    {item.city.map((city, c_key) => {
                                                        return (
                                                            <li key={c_key}>
                                                                {city.name}
                                                                {city.contact.length > 1 ? (
                                                                    <ul>
                                                                        {city.contact.map((contact, t_key) => {
                                                                            return (
                                                                                <li key={t_key}>{contact.name} - {contact.phone}</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                ) : (
                                                                    <label className="m-0">
                                                                        {city.contact.map((contact, t_key) => {
                                                                            return (
                                                                                <span key={t_key}>: {contact.name} - {contact.phone}</span>
                                                                            )
                                                                        })}
                                                                    </label>
                                                                )}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
