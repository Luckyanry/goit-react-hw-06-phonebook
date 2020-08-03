import { QUERY_FILTER } from "../constants/filterConstants";

export const handleFilter = (e) => ({
  type: QUERY_FILTER,
  payload: e.target.value,
});
