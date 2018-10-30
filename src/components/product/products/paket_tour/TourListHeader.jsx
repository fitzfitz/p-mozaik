import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default class TourListHeader extends Component {
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
            .then(resp => this.setState({data: resp, loaded: true}))
    }
    render() {
        const { path } = this.props.match;
        const list = this.state.data.map((item, key) => {
            return (
                <NavLink key={key} style={{display: 'flex'}} className="col-sm-3" to={`${path}/list/${item.slug}`}>
                    <Card>
                        <div className="responsive-card-img-group" style={{backgroundImage: `url('${item.image}')`}}></div>
                        {/* <CardImg top width="100%" src={item.image} alt={item.title} /> */}
                        <CardBody className="p-2">
                            <h6 className="card-title">{item.title}</h6>
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </NavLink>
            )
        });
        return (
            <div className="container pt-5 pb-5">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}
