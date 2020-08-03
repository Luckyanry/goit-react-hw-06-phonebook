import { ADD_CONTACT, DELETE_CONTACT } from "../constants/contactConstants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};
