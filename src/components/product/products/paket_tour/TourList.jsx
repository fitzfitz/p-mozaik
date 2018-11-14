import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LoadSpinner from '../../../other/LoadSpinner';

export default class TourList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            data: []
        }
    }
    componentWillMount() {
        fetch('/data/data_paket_tour.json')
            .then(res => res.json())
            .then(resp => {
                const product = resp.find(item => item.slug === this.props.match.params.slug);
                this.setState({data: product.data, loaded: true})
            })
    }
    render() {
        const list = this.state.data.map((item, key) => {
            return (
                <NavLink key={key} className="col-sm-4" to={`../detail/${item.slug}`}>
                    <Card>
                        <div style={{ position: 'relative' }}>
                            <div className="responsive-card-img-group" style={{backgroundImage: `url('${item.image}')`}}></div>
                            <div className="responsive-card-batch-right">{item.time}</div>
                        </div>
                        <CardBody className="p-2">
                            <h6 className="card-title">{item.name}</h6>
                            <p className="card-title">{item.description}</p>
                            <div className="card-text">
                                <p>Rp. {item.price},- / min. 15 pax</p>
                                <p className="text-red">*Harga sewaktu-waktu dapat berubah tanpa pemberitahuan sebelumnya</p>
                            </div>
                        </CardBody>
                    </Card>
                </NavLink>
            )
        });
        return (
            <div className="container pt-5 pb-5">
                <div className="row">
                    {this.state.loaded ? (
                        this.state.data.length === 0 ? <div className="col-sm-12">No Data Available</div> : list
                    ) : (
                        <div className="col-sm-12 row justify-content-center">
                            <LoadSpinner bg="2c3280" className="text-white text-center mb-4" />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
