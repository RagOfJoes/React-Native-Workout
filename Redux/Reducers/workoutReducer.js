const initState = {
    workouts: {
        Push: {
            Exercises: ["Bench Press", "Shoulder Press", "Incline Bench Press", "Chest Dips", "Hex", "Lateral Raise", "Pushups"]
        },
        Arms: {
            Exercises: ["Curls", "Pulldowns"]
        }
    },
    workoutNames: ["Push", "Arms"]
}

const workoutReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_EXERCISE":
            return {
                ...state,
                workouts: {
                    ...state.workouts,
                    [action.workoutName]: {
                        Exercises: [...state.workouts[action.workoutName].Exercises, action.exerciseName]
                    }
                }
            }
        case "REMOVE_EXERCISE":
            return {
                ...state,
                workouts: {
                    ...state.workouts,
                    [action.workoutName]: {
                        Exercises: state.workouts[action.workoutName].Exercises.filter((Exercise) => Exercise !== action.exerciseName)
                    }
                }
            }
        case "NEW_WORKOUT":
            return {
                ...state,
                workouts: {
                    ...state.workouts,
                    [action.defaultWorkoutName]: {
                        Exercises: []
                    }
                },
                workoutNames: [...state.workoutNames, action.defaultWorkoutName]
            }
        case "DEL_WORKOUT":
            // Creates deep copy of state w/out Workout Name
            const deletedWorkout = Object.keys(state.workouts).reduce((object, key) => {
                if (key !== action.workoutName) {
                    object[key] = state.workouts[key]
                }
                return object
            }, {});

            return {
                ...state,
                workouts: deletedWorkout,
                workoutNames: state.workoutNames.filter(name => name !== action.workoutName)
            }
        default:
            return state;
    }
}

export default workoutReducer;