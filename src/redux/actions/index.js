import {
  SET_USERNAME,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REQUEST_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from './actionTypes';

import getProducts from '../../services/getProducts';

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

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

export const fetchProducts = () => async (dispatch) => {
  dispatch(requestProducts());

  try {
    const products = await getProducts();
    dispatch(getProductsSuccess(products));
  } catch (error) {
    dispatch(getProductsError(error.message));
  }
};
