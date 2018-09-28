import axios from 'axios';

export function getProducts() {
    return (dispatch) => {
      let products = ['one'];
      if (products) {
        dispatch([
          {
            type: 'GET_PRODUCTS',
            payload: products
          }
        ]);
      }
    }
  }