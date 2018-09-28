import React from 'react';

import './tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    getTile(tileData) {
        const style = {
            backgroundImage: 'URL(' + tileData.thumbnail.href + ')'
        },
            regularPriceText = 'Actual price of this product is from '
                + tileData.priceRange.regular.low
                + ' to '
                + tileData.priceRange.regular.high,
            sellingPriceText = 'Get this product at discounted price from '
                + tileData.priceRange.selling.low
                + ' to '
                + tileData.priceRange.selling.high;

        return (
            <div className="col-md-4 col-sm-12 d-inline-block">
                <div className="card tile">
                    <div className="card-header bg-primary text-white">{tileData.name}</div>
                    <div className="card-body" style={style}></div>
                    <div className="card-footer">
                        <span className="text-warning">{regularPriceText}</span> <br />
                        <span className="text-success">{sellingPriceText}</span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.props.product ? this.getTile(this.props.product) : null
        );
    }
}

export default Tile;