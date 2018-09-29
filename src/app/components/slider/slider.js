import React from 'react';

import './slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    moveImages(direction) {
        let currentIndex = this.state.currentIndex + direction;
        if (currentIndex >= this.props.images.length) {
            currentIndex = 0;
        }
        if (currentIndex < 0) {
            currentIndex = this.props.images.length - 1;
        }
        this.setState({
            currentIndex
        });
    }

    getSlider(images) {
        const sliderStyle = {
            width: (100 / images.length) + '%'
        },
            boardStyle = {
                width: (100 * images.length) + '%',
                marginLeft: (0 - (this.state.currentIndex * 100)) + '%'
            };

        return (
            <div className="overlay" >
                <div className="board" style={boardStyle}>
                    {
                        images.map((item, index) => {
                            const style = {
                                width: item.width,
                                height: item.height,
                                backgroundImage: 'URL(' + item.href + ')',
                                marginTop: (0 - (item.height / 2)) + 'px'
                            };
                            return (
                                <div key={'overlay-img-' + index} className="slider-image-wrapper" style={sliderStyle}>
                                    <div className="slider-image" style={style}></div>
                                </div>
                            );
                        })
                    }
                </div>
                {
                    images.length > 1 ? (<React.Fragment><button type="button" className="btn" onClick={() => { this.moveImages(-1) }}></button>
                        <button type="button" className="btn" onClick={() => { this.moveImages(1) }}></button></React.Fragment>) : null
                }
                <span className="close-button" onClick={() => { this.props.close(); }}></span>
                <div className="slider-nav">
                    {
                        images.map((item, index) => {
                            const className = index === this.state.currentIndex ? 'nav-indicator active' : 'nav-indicator';
                            return (
                                    <div key={'nav-'+index} className={className}></div>
                            );
                        })
                    }
                </div>
            </div >
        );
    }

    render() {
        return (
            this.props.images ? this.getSlider(this.props.images) : null
        );
    }
}

export default Slider;