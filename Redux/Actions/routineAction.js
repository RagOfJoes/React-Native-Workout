export const addWorkout = (routineName) => ({
    type: "ADD_WORKOUT",
    routineName
})

export const delWorkout = (routineName, workoutName) => ({
    type: "DEL_WORKOUT",
    routineName, workoutName
})