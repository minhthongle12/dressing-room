let initialState = "topclothes";

const ChoosenCategoryReducer = ( state= initialState, action) => {
    switch(action.type){
        case "SET_CATEGORY":
            state= action.payload;
            return state;
        default:
             return state;
    }
}

export default ChoosenCategoryReducer;