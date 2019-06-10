import { combineReducers } from 'redux';
import initLoadReducer from './initLoadReducer';

export const rootReducer = combineReducers({
    initLoad: initLoadReducer
})