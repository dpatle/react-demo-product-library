import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts } from '../actions/products';
import Tile from '../components/tile/tile';
import Slider from '../components/slider/slider';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            showSlider: false,
            imageData: []
        };
    }

    componentDidMount() {
        this.props.getProducts();
    }

    openSlider(imageData) {
        this.setState({
            showSlider: true,
            imageData: imageData.images
        });
    }

    closeSlider() {
        this.setState({
            showSlider: false
        });
    }

    getTileList(products) {
        return (
            <div>
                {
                    products['groups'].map((item, index) => {
                        return (
                            <div key={'tile-' + index} className="col-md-4 col-sm-12 d-inline-block">
                                <div onClick={() => { this.openSlider(item) }}>
                                    <Tile product={item}></Tile>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        return (<div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <span className="nav-link">Catalog Dashboard</span>
                    </li>
                </ul>
            </nav>
            {
                this.props.products ? this.getTileList(this.props.products) : null
            }
            {
                this.state.showSlider ? <Slider images={this.state.imageData} close={this.closeSlider.bind(this)}></Slider> : null
            }
        </div>);
    }
}

const mapPropsToState = state => {
    return {
        products: state.products.allProducts
    };
}

const mapPropsToDispatch = dispatch => {
    return bindActionCreators({
        getProducts
    }, dispatch);
}

export default connect(mapPropsToState, mapPropsToDispatch)(Dashboard);