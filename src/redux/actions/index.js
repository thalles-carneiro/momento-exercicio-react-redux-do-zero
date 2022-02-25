import {
  SET_USERNAME,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './actionTypes';

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
