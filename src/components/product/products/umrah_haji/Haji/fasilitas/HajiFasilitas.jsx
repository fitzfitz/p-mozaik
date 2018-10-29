import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap'

export default class HajiFasilitas extends Component {
    render() {
        return (
            <div id="HajiFasilitas" className="tab-pane active">
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
                        <CardTitle>Madinnah</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
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
                <div>
                    <div className="row justify-content-center">
                        <Card className="col-md-6 text-center text-white no-border">
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                            <CardBody className="bg-red" style={{ display: 'block' }}>
                                <CardTitle>Pesawat</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
