


const intialState = {
    passbookEnteries : []
}

const passbookReducer = (state = intialState , action) =>{

    switch (action.type) {
        case "CREDIT":
            return {
                ...state,
                passbookEnteries : state.passbookEnteries.concat(action.payload)
            }

        case "DEBIT":
            return {
                ...state,
                passbookEnteries : state.passbookEnteries.concat(action.payload)
            }
        default:
            return {
                ...state,
            }
    }

}

export default passbookReducer;