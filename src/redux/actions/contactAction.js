import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTAT_STORAGE,
} from "../constants/contactConstants";

export const addContact = (singleContact) => ({
  type: ADD_CONTACT,
  payload: singleContact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const contactStorage = (arr) => ({
  type: CONTAT_STORAGE,
  payload: arr,
});
