import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoriesActionTypes } from "./categories.types";
export const setCategories = (payload) =>
  createAction(CategoriesActionTypes.setCategories, payload);
