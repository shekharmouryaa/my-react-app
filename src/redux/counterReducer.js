const initalState = {
    count : 0
}



// Reducer take two arguments state and action
export const counterReducer = (state = initalState, action) => {
    switch (action.type){
        case  "INCREMENT":
            return {...state, count : state.count + 1}
        case  "DECREMENT":
            return {...state, count : state.count - 1}
            default:
                return state
    }
    
}

