import axios from 'axios';
import { GET_PRODUCTS } from '../action-types';

export function getProducts() {
    let apiUrl = '/api/products.json';
    return (dispatch) => {
        axios.get(apiUrl)
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                });
            }, error => {
                console.log('Error : ', error);
            });
    };
}