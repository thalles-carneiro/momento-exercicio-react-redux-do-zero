import {
  REQUEST_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  errorMessage: '',
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state;
  }
};

export default products;
