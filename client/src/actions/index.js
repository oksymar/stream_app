import streams from '../apis/streams';
import {ADD_MESSAGE, FETCH_STREAMS, SIGN_IN, SIGN_OUT} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/category');

    dispatch({type: FETCH_STREAMS, payload: response.data})
};

export const addMessage = payload => {
    return {
        type: ADD_MESSAGE,
        payload: payload
    };
};