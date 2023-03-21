import { CategoriesActionTypes } from "./categories.types";
const INITIAL_STATE = { categories: [] };
export const CategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoriesActionTypes.setCategories:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
