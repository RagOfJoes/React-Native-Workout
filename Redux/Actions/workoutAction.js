export const addExercise = (workoutName, exerciseName) => ({
    type: "ADD_EXERCISE",
    workoutName, exerciseName
})

export const removeExercise = (workoutName, exerciseName) => ({
    type: "REMOVE_EXERCISE",
    workoutName, exerciseName
})