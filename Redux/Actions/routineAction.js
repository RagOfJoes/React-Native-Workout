export const newWorkout = (routineName, defaultWorkoutName) => ({
    type: "NEW_WORKOUT",
    routineName, defaultWorkoutName
})

export const addWorkout = (routineName, workoutName) => ({
    type: "ADD_WORKOUT",
    routineName, workoutName
})

export const delWorkout = (routineName, workoutName) => ({
    type: "DEL_WORKOUT",
    routineName, workoutName
})