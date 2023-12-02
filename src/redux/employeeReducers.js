

const initialState = {
  records : [],
  TotalCounts : 0
}

export const employeeReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_EMPLOYEE':
            return {...state, records: action.payload};
        case 'ADD_EMPLOYEE':
            return {...state, records: state.records.concat(action.payload)};
        case 'DELETE_EMPLOYEE':
            return {...state, records: state.records.filter(item => item._id !== action.payload)};
        case 'UPDATE_EMPLOYEE':
            return {...state, records: state.records
                .map((item) => item._id === action.payload.id ? action.payload.form : item)}
        default:
            return state;
    }
}