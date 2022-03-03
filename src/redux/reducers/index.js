import { combineReducers } from 'redux';

import user from './user';
import cart from './cart';
import products from './products';

const rootReducer = combineReducers({ user, cart, products });

export default rootReducer;
