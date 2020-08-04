import { createAction } from "@reduxjs/toolkit";
import { QUERY_FILTER } from "../constants/filterConstants";

export const handleFilter = createAction(QUERY_FILTER, ({ target }) => ({
  payload: target.value,
}));

// export const handleFilter = (e) => ({
//   type: QUERY_FILTER,
//   payload: e.target.value,
// });
