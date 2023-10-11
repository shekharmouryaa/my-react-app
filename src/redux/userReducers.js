
const initalState = {
    users : [],
    isAdmin : false
}

export const userReducer = (state = initalState, action) => {

    switch (action.type){
        case  "ADD_USER": 
        return {...state, users : state.users.concat(action.payload)}

        case  "DELETE_USER": 
        return {...state, users : action.payload}

        case  "EDIT_USER": 
        return {...state, users : action.payload}

        default:
            return state
        }
}