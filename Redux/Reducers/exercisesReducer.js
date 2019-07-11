const initState = {
    exercises: {
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
    exercisesNames: ["Bench Press", "Shoulder Press", "Incline Bench Press", "Chest Dips", "Hex", "Lateral Raise", "Pushups"]
}

const exercisesReducer = (state = initState, action) => {
    switch (action.Type) {
        default:
            return state;
    }
}

export default exercisesReducer