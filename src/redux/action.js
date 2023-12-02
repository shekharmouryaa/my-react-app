import { createEmployeesApi, deleteEmployeeApi, getEmployeesApi, updateEmployeeApi } from "../api"

export const getEmployee =  () => async (dispatch) =>{
    const res = await getEmployeesApi()
    dispatch({
        type : 'GET_EMPLOYEE',
        payload : res
    })
}

export const addEmployee =  (form) => async (dispatch) =>{
    const res = await createEmployeesApi(form)
    dispatch({
        type : 'ADD_EMPLOYEE',
        payload : res
    })
}

export const deleteEmployeeAction = (id) => async (dispatch) => {
    const res = await deleteEmployeeApi(id)
    dispatch({
        type : 'DELETE_EMPLOYEE',
        payload : id
    })
    return res
}

export const updateEmployeAction = (form,id) => async (dispatch) => {
    const res = await updateEmployeeApi(form,id)
    dispatch({
        type : 'UPDATE_EMPLOYEE',
        payload : {id, form}
    })
    return res
}







// export const addEmployees =  (form) =>{
//     return{
//         type : 'ADD_EMPLOYEE',
//         payload : form
//     }
// }
