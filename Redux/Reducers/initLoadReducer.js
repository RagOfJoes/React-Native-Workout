const initState = {
    isAssetLoaded: false
}

const initLoadReducer = (state = initState, action) => {
    switch (action.type) {
        case "IS_ASSET_LOADED":
            return {
                ...state,
                isAssetLoaded: action.isLoaded
            }
        default:
            return state;
    }
}

export default initLoadReducer;