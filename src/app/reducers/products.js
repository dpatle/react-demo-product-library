import { GET_PRODUCTS } from '../action-types';

export default function (state = {}, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          allProducts: action.payload
        }
      default:
        return state;
    }
  }
