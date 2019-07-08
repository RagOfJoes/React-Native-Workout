import { combineReducers } from 'redux';
import initLoadReducer from './initLoadReducer';
import routineReducer from './routineReducer';

export const rootReducer = combineReducers({
    initLoad: initLoadReducer,
    Routines: routineReducer
})