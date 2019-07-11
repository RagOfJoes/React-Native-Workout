import thunkMiddleWare from 'redux-thunk';
import { rootReducer } from './Reducers/rootReducer';
import { createStore, compose, applyMiddleware } from 'redux'

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunkMiddleWare))
);