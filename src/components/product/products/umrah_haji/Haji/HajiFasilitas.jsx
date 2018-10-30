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
                                <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/madinah1.JPEG")'}}></div>
                            </Card>
                            <Card>
                                <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/madinah2.jpg")'}}></div>
                            </Card>
                            <Card>
                                <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/madinah3.JPEG")'}}></div>
                            </Card>
                        </CardGroup>
                        <CardBody style={{ display: 'block' }}>
                            <CardTitle>Madinnah</CardTitle>
                            <CardText>Royal Inn Al-Rawda Hotel *5 selama 3 malam dengan jarak 50m dari pelataran Masjidil Nabawi</CardText>
                        </CardBody>
                    {/* </NavLink> */}
                </div>
                <div className="ftz-card-group-one-body mb-5">
                    <CardGroup>
                        <Card>
                            <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/makkah1.jpg")'}}></div>
                        </Card>
                        <Card>
                            <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/makkah2.jpg")'}}></div>
                        </Card>
                        <Card>
                            <div className="responsive-card-img-group" style={{backgroundImage: 'url("/assets/product/haji/makkah3.jpg")'}}></div>
                        </Card>
                    </CardGroup>
                    <CardBody style={{ display: 'block' }}>
                        <CardTitle>Makkah</CardTitle>
                        <CardText>Al Safwah Royale Orchid Hotel *5 selama 4 malam dengan jarak 50m dari pelataran Masjidil Haram</CardText>
                    </CardBody>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="row">
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="/assets/product/haji/pesawat.jpg" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Pesawat</CardTitle>
                                <CardText>Saudia Airlines (Landing Jeddah)</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="/assets/product/haji/bus.jpg" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Transportasi Darat</CardTitle>
                                <CardText>Bus AC Faruk Jamil Khoger</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-4 text-center text-white no-border">
                            <CardImg top width="100%" src="/assets/product/haji/mina.jpg" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Mina-Arafah</CardTitle>
                                <CardText>Maktab VVIP 112</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
