import { combineReducers } from "redux";
import input from "./formReducer";
import filter from "./filterReducer";
import items from "./contactReducer";

export default combineReducers({
  items,
  filter,
  input,
});
