import { combineReducers } from "redux";
import { StateReducers } from "./pageReducer"

export const AllReducers = combineReducers({
 homePageState: StateReducers.HomePage
});