import { QUERY_FILTER, FILTERED_CONTACT } from "../constants/filterConstants";

const initialeState = [];

export default (state = initialeState, action) => {
  switch (action.type) {
    case QUERY_FILTER:
      return [...state, action.payload];

    case FILTERED_CONTACT:
      return state.filter((contact) =>
        contact.name.toLowerCase().includes(state.toLowerCase())
      );
    //   return state.contacts.filter((contact) =>
    //     contact.name.toLowerCase().includes(state.filter.toLowerCase())
    //   );

    default:
      return state;
  }
};
