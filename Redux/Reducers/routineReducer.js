const initState = {
    routines: {
        ["Push Pull Legs"]: {
            Workouts: ["Push"]
        }
    },
    currentRoutine: "Push Pull Legs",
    routineNames: ["Push Pull Legs"],
};

const routineReducer = (state = initState, action) => {
    switch (action.type) {
        case "NEW_WORKOUT":
            return {
                ...state,
                routines: {
                    ...state.routines,
                    [action.routineName]: {
                        ...state.routines[action.routineName],
                        Workouts: [...state.routines[action.routineName].Workouts, action.defaultWorkoutName]
                    },
                }
            }
        case "ADD_WORKOUT":
            return {
                ...state,
                routines: {
                    ...state.routines,
                    [action.routineName]: {
                        ...state.routines[action.routineName],
                        Workouts: [...state.routines[action.routineName].Workouts, action.workoutName]
                    }
                }
            }
        case "DEL_WORKOUT":
            return {
                ...state,
                routines: {
                    ...state.routines,
                    [action.routineName]: {
                        ...state.routines[action.routineName],
                        Workouts: state.routines[action.routineName].Workouts.filter(name => name !== action.workoutName)
                    }
                }
            }
        default:
            return state;
    }
}

export default routineReducer;