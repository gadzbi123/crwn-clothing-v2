import { CategoriesActionTypes } from "./categories.types";

const INITIAL_STATE = { categories: [], isLoading: false, error: null };

export const CategoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoriesActionTypes.fetchCategoriesStart:
      return { ...state, isLoading: true };
    case CategoriesActionTypes.fetchCategoriesFailure:
      return { ...state, error: payload, isLoading: false };
    case CategoriesActionTypes.fetchCategoriesSuccess:
      return { ...state, categories: payload, isLoading: false };
    default:
      return state;
  }
};
