import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { counterReducer } from "./counterReducer";


export const appReducer = combineReducers({
    userReducer,
    counterReducer
})
