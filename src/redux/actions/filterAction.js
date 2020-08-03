import { QUERY_FILTER, FILTERED_CONTACT } from "../constants/filterConstants";

export const handleFilter = (e) => ({
  type: QUERY_FILTER,
  payload: e.target.value,
});

export const getFilteredContact = () => ({
  type: FILTERED_CONTACT,
});
