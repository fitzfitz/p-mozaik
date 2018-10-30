import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators} from 'reactstrap';

export default class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    onExiting() {
        this.animating = true;
    }
    onExited() {
        this.animating = false;
    }
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;
        const slides = this.props.items.map((item, key) => {
            return (
                <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={key}
                >
                    <div className="image-carousel-div" style={{backgroundImage: `url('${item.src}')`}}></div>
                    {/* <img className="d-block w-100" src={item.src} alt={item.altText} /> */}
                    <div className="carousel-caption d-none d-md-block">
                        <div className="slider-desciption">
                            {item.descTop != null && <span className="product-carousel-desc-top">{item.descTop}</span>}
                            {item.title != null && <span className="product-carousel-title">{item.title}</span>}
                            {item.descMid != null && <span className="product-carousel-desc-middle">{item.descMid}</span>}
                        </div>
                        <button type="button" className="btn btn-outline-secondary slide-btn">Hubungi Kami<br/><strong>+62 21 8313444</strong></button>
                    </div>
                    {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
                </CarouselItem>
            );
        });

        return (
            <div className="container-fluid">
                <div className="row">
                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        {this.props.items.length > 1 && <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />}
                        {this.props.items.length > 1 && <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />}
                    </Carousel>
                </div>
            </div>
        )
    }
}
