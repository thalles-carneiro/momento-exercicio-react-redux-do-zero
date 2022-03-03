/*
Formato do estado global:

{
  user: {
    username: '',
  },
  cart: {
    cartProducts: [],
  },
  products: {
    products: [],
  },
}

*/

/* 
Actions necessárias:

// User
const SET_USERNAME = 'SET_USERNAME';

const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

// Cart
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Products
const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (errorMessage) => ({
  type: GET_PRODUCTS_ERROR,
  payload: errorMessage,
});

const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(requestProducts());

    try {
      dispatch(getProductsSuccess(getProducts()));
    } catch (error) {
      dispatch(getProductsError(error.message));
    }
  }
};

*/