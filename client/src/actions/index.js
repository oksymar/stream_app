import streams from '../apis/streams';
import {ADD_MESSAGE, FETCH_STREAMS, FETCH_VIDEOS, SIGN_IN, SIGN_OUT} from "./types";

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

export const fetchVideos = () => async dispatch => {
    const response = await streams.get('/videos');

    dispatch({type: FETCH_VIDEOS, payload: response.data})
};

export const addMessage = payload => {
    return {
        type: ADD_MESSAGE,
        payload: payload
    };
};