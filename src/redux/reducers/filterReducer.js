import { QUERY_FILTER } from "../constants/filterConstants";

const initialeState = "";

export default (state = initialeState, { type, payload }) => {
  switch (type) {
    case QUERY_FILTER:
      return (state = payload);

    default:
      return state;
  }
};
