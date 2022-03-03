import { SET_USERNAME } from './actionTypes';

export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username,
});
