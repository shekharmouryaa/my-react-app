
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
    
}
export const deleteUser = (users) => {
    return {
        type: "DELETE_USER",
        payload: users
    }
    
}
