import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTAT_STORAGE,
} from "../constants/contactConstants";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const contactStorage = createAction(CONTAT_STORAGE);

// export const addContact = (singleContact) => ({
//   type: ADD_CONTACT,
//   payload: singleContact,
// });

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const contactStorage = (arr) => ({
//   type: CONTAT_STORAGE,
//   payload: arr,
// });
