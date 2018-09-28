import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts } from '../actions/products';
import Tile from '../components/tile/tile';

class Dashboard extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getProducts();
    }

    getTileList(products) {
        return (
            <div>
                {
                    products['groups'].map((item, index) => {
                        return <Tile product={item}></Tile>;
                    })
                }
            </div>
        );
    }

    render() {
        return (<div>{
            this.props.products ? this.getTileList(this.props.products) : null
        }</div>);
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