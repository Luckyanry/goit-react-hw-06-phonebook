import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  contactStorage,
} from "../actions/contactAction";

export default createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [contactStorage]: (state, { payload }) => payload,
});

// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   CONTAT_STORAGE,
// } from "../constants/contactConstants";

// const initialState = [];

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];

//     case DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== payload);

//     case CONTAT_STORAGE:
//       return payload;

//     default:
//       return state;
//   }
// };
