const initState = {
    isFontLoaded: false
}

const initLoadReducer = (state = initState, action) => {
    switch (action.type) {
        case "IS_FONT_LOADED":
            return {
                ...state,
                isFontLoaded: action.isLoaded
            }
        default:
            return state;
    }
}

export default initLoadReducer;