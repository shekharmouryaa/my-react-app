

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
        default:
            return state;
    }
}