import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap'
// import { NavLink } from 'react-router-dom';
export default class HajiFasilitas extends Component {
    render() {
        return (
            <div id="HajiFasilitas" className="tab-pane active">
                <div className="ftz-card-group-one-body mb-5">
                    {/* <NavLink className="nav-item nav-link sec-style" to={`/product/haji-fac/madinah`}> */}
                        <CardGroup>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            </Card>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            </Card>
                        </CardGroup>
                        <CardBody style={{ display: 'block' }}>
                            <CardTitle>Madinnah</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        </CardBody>
                    {/* </NavLink> */}
                </div>
                <div className="ftz-card-group-one-body mb-5">
                    <CardGroup>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        </Card>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        </Card>
                    </CardGroup>
                    <CardBody style={{ display: 'block' }}>
                        <CardTitle>Makkah</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="row">
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Pesawat</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Transportasi Darat</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Mina-Arafah</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
