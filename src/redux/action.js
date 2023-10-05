
export const creditAmount = (creditEntry) =>{
    return {
        type : "CREDIT",
        payload : creditEntry
    }
}


export const debitAmount = (debitEntry) =>{
    return {
        type : "DEBIT",
        payload : debitEntry
    }
}