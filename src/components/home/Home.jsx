import React, { Component } from "react";
import HomeCarousel from './HomeCarousel';
import HomeService from './HomeService';
import HomeAdvantage from './HomeAdvantage';
import HomeVideo from './HomeVideo';
import HomeGallery from './HomeGallery';
import HomeTestimoni from './HomeTestimoni';
import HomePartner from './HomePartner';
import './Home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeCarousel: [],
            homeCarouselProp: {},
            homeServices: [],
            homeServicesProp: {},
            homeAdvantage: [],
            homeAdvantageProp: {},
            homeVideo: [],
            homeVideoProp: {},
            homeGallery: [],
            homeGalleryProp: {},
            homeTestimoni: [],
            homeTestimoniProp: {},
            homePartner: [],
            homePartnerProp: {},
            isLoading: true,
            isLoaded: false
        }
    }
    componentWillMount() {
        fetch('./data/data.json').then(res => res.json())
            .then(res => {
                this.setState({
                    homeCarousel: res.Home.carousel.items,
                    homeCarouselProp: res.Home.carousel.properties,
                    homeServices: res.Home.services.items,
                    homeServicesProp: res.Home.services.properties,
                    homeAdvantage: res.Home.advantage.items,
                    homeAdvantageProp: res.Home.advantage.properties,
                    homeVideo: res.Home.video.items,
                    homeVideoProp: res.Home.video.properties,
                    homeGallery: res.Home.gallery.items,
                    homeGalleryProp: res.Home.gallery.properties,
                    homeTestimoni: res.Home.testimoni.items,
                    homeTestimoniProp: res.Home.testimoni.properties,
                    homePartner: res.Home.partner.items,
                    homePartnerProp: res.Home.partner.properties,
                    isLoading: false, 
                    isLoaded: true
                })
            })
    }

    render() {
        return (
            <div id="Home">
                <HomeCarousel data={this.state.homeCarouselProp} items={this.state.homeCarousel}/>
                <HomeService data={this.state.homeServicesProp} items={this.state.homeServices}/>
                <HomeAdvantage data={this.state.homeAdvantageProp} items={this.state.homeAdvantage}/>
                <HomeVideo data={this.state.homeVideoProp} items={this.state.homeVideo}/>
                <HomeGallery data={this.state.homeGalleryProp} items={this.state.homeGallery}/>
                <HomeTestimoni data={this.state.homeTestimoniProp} items={this.state.homeTestimoni}/>
                <HomePartner data={this.state.homePartnerProp} items={this.state.homePartner}/>
            </div>
        )
    }
}
