  export default function (state = [], action) {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          allProducts: action.payload
        }
        break;
      default:
        return state;
    }
  }