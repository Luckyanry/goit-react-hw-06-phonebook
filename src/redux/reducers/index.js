import { combineReducers } from "redux";
import input from "./formReducer";
import filter from "./filterReducer";
import singleContact from "./contactReducer";

const rootReducer = combineReducers({
  contacts: singleContact,
  filter,
  input,
});

export default rootReducer;
