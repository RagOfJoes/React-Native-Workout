import { rootReducer } from './Reducers/rootReducer';
import { createStore } from 'redux'

export const store = createStore(
    rootReducer
);