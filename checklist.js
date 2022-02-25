/*
Formato do estado global:

{
  user: {
    username: '',
  },
  cart: {
    cartProducts: [],
  },
}

*/

/* 
Actions necessárias:

const SET_USERNAME = 'SET_USERNAME';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

*/