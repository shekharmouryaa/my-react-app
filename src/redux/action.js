
export const addUser = (form) => {
    return {
        type: "ADD_USER",
        payload: form
    }
    
}
export const deleteUser = (usersData) => {
    return {
        type: "DELETE_USER",
        payload: usersData
    }
}


export const updateUser = (usersData) => {
    return {
        type: "EDIT_USER",
        payload: usersData
    }
}
