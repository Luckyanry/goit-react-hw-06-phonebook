import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: [
    {
      id: null,
      name: null,
      number: null,
    },
  ],
  filter: "",
});

export default rootReducer;
