import { combineReducers } from "redux";
import {employeeReducers} from "./employeeReducers";

export const appReducers = combineReducers({
    employeeReducers,
})