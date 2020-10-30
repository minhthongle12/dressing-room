let initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: '',
}

const ModelReducer = (state = initialState, action ) => {
    switch(action.type){
        case "SET_CLOTHES":{
            state[action.payload.type] = action.payload.img;
            return {...state}
        }
        default: return state;
    }
}

export default ModelReducer;