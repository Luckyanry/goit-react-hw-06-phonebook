import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// ======================================================

// import { combineReducers } from "redux";
// import filter from "../redux/reducers/filterReducer";
// import items from "../redux/reducers/contactReducer";

// const rootReducer = combineReducers({
//   items,
//   filter,
// });

// const store = configureStore({
//   reducer: { contacts: rootReducer },
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;

// =======================================================

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import contactsReducer from "./reducers";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
