import { createEmployeesApi, getEmployeesApi } from "../api"

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