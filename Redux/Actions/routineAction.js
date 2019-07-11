export const addWorkout = (routineName, defaultWorkoutName) => {
    return {
        type: "ADD_WORKOUT",
        routineName, defaultWorkoutName
    };
}

export const delWorkout = (routineName, workoutName) => ({
    type: "DEL_WORKOUT",
    routineName, workoutName
})