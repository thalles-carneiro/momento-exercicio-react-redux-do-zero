import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from './actionTypes';

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsFail = (error) => ({
  type: GET_PRODUCTS_FAIL,
  payload: error,
});

export const fetchProducts = (query) => async (dispatch) => {
  dispatch(getProducts());

  const PRODUCTS_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  try {
      const response = await fetch(PRODUCTS_URL);
      const { results } = await response.json();
      dispatch(getProductsSuccess(results));
  } catch (error) {
      dispatch(getProductsFail(error.message))
  }
};
