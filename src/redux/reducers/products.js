import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  products: [],
  errorMessage: '',
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case GET_PRODUCTS:
          return { ...state, isFetching: true };
      case GET_PRODUCTS_SUCCESS:
          return { ...state, products: action.payload , isFetching: false };
      case GET_PRODUCTS_FAIL:
          return { ...state, errorMessage: action.payload , isFetching: false };
      default:
          return state;
  }
}

export default productsReducer;
