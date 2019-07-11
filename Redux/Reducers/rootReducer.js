import { combineReducers } from 'redux';
import initLoadReducer from './initLoadReducer';
import routineReducer from './routineReducer';
import workoutReducer from './workoutReducer';
import exercisesReducer from './exercisesReducer';

export const rootReducer = combineReducers({
    initLoad: initLoadReducer,
    Workouts: workoutReducer,
    Routines: routineReducer,
    Exercises: exercisesReducer
})