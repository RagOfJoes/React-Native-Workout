const initState = {
    routines: {
        ["Push Pull Legs"]: {
            Workouts: {
                Push: {
                    Exercises: {
                        ["Bench Press"]: {
                            Type: "Chest"
                        },
                        ["Shoulder Press"]: {
                            Type: "Shoulders"
                        },
                        ["Incline Bench Press"]: {
                            Type: "Chest"
                        },
                        ["Chest Dips"]: {
                            Type: "Chest"
                        },
                        ["Hex"]: {
                            Type: "Chest"
                        },
                        ["Lateral Raise"]: {
                            Type: "Shoulders"
                        },
                        ["Pushups"]: {
                            Type: "Abs"
                        }
                    },
                    ExercisesNames: ["Bench Press", "Shoulder Press", "Incline Bench Press", "Chest Dips", "Hex", "Lateral Raise", "Pushups"]
                }
            },
            WorkoutNames: ["Push"],
        }
    },
    currentRoutine: "Push Pull Legs",
    routineNames: ["Push Pull Legs"],
};

const routineReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_WORKOUT":
            const length = state.routines[action.routineName].WorkoutNames.length + 1;

            let defaultWorkoutName = `Workout #${length}`;

            if (state.routines[action.routineName].Workouts[defaultWorkoutName]) {
                defaultWorkoutName = `Workout #${new Date().getSeconds().toString()}`;
            }
            return {
                ...state,
                routines: {
                    ...state.routines,
                    [action.routineName]: {
                        ...state.routines[action.routineName],
                        Workouts: {
                            ...state.routines[action.routineName].Workouts,
                            [defaultWorkoutName]: {
                                Exercises: {},
                                ExercisesNames: []
                            }
                        },
                        WorkoutNames: [...state.routines[action.routineName].WorkoutNames, defaultWorkoutName]
                    },
                }
            }
        case "DEL_WORKOUT":
            // Creates deep copy of state w/out deleted Workout Name
            const deletedWorkout = Object.keys(state.routines[action.routineName].Workouts).reduce((object, key) => {
                if (key !== action.workoutName) {
                    object[key] = state.routines[action.routineName].Workouts[key]
                }
                return object
            }, {});

            return {
                ...state,
                routines: {
                    ...state.routines,
                    [action.routineName]: {
                        ...state.routines[action.routineName],
                        Workouts: deletedWorkout,
                        WorkoutNames: state.routines[action.routineName].WorkoutNames.filter(name => name !== action.workoutName)
                    }
                }
            }
        default:
            return state;
    }
}

export default routineReducer;