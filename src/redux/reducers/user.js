import { SET_USERNAME } from '../actions/actionTypes';

const INITIAL_STATE = {
  username: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default user;
