import { combineReducers } from "redux";
import filter from "./filterReducer";
import items from "./contactReducer";

export default combineReducers({
  items,
  filter,
});
