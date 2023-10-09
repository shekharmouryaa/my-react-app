import { combineReducers } from "redux";


const initalState = {
    users :[]
}

const userReducer = (state = initalState, action) => {

    switch (action.type){
        case  "ADD_USER": 
        return {...state, users : [...state.users, action.payload]}

        case  "DELETE_USER": 
        return {...state, users : action.payload}

        case  "EDIT_USER": 
        return {...state, users : []}

        default:
            return state
        }
}


export const reducer = combineReducers({
    userReducer,
})
