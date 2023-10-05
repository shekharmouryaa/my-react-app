import { combineReducers } from "redux";
import  passbookReducer  from "./passbookReducer";

const appReducers = combineReducers({
    entries: passbookReducer,
})
  
export default appReducers;

