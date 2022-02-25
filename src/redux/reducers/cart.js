import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  cartProducts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
