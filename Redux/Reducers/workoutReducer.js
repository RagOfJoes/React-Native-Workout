const initState = {
    workouts: {
        Push: {
            Exercises: ["Bench Press", "Shoulder Press", "Incline Bench Press", "Chest Dips", "Hex", "Lateral Raise", "Pushups"]
        }
    },
    workoutNames: ["Push"]
}

const workoutReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
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