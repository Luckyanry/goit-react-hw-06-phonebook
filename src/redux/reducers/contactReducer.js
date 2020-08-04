import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  contactStorage,
  handleFilter,
} from "../actions/contactAction";

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

export const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: removeContact,
  [contactStorage]: (state, { payload }) => payload,
});

export const filter = createReducer("", {
  [handleFilter]: (state, { payload }) => (state = payload),
});

// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   CONTAT_STORAGE,
//   CONTACT_FILTER;
// } from "../constants/contactConstants";

// export default (state = [], { type, payload }) => {
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

// export default (state = "", { type, payload }) => {
//   switch (type) {
//     case CONTACT_FILTER:
//       return (state = payload);

//     default:
//       return state;
//   }
// };
