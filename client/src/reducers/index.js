import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducers';
import chatReducer from "./chatReducer";
import mainVideosReducer from "./mainVideosReducer";

export default combineReducers({
    auth: authReducer,
    chat: chatReducer,
    form: formReducer,
    streams: streamReducer,
    videos: mainVideosReducer
});