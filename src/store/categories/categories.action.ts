import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoriesActionTypes, Category } from "./categories.types";

export type FetchCategoriesStart =
  Action<CategoriesActionTypes.fetchCategoriesStart>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CategoriesActionTypes.fetchCategoriesSuccess,
  Category[]
>;
export type FetchCategoriesFailure = ActionWithPayload<
  CategoriesActionTypes.fetchCategoriesFailure,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CategoriesActionTypes.fetchCategoriesStart)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CategoriesActionTypes.fetchCategoriesSuccess, categoriesArray)
);

export const fetchCategoriesFailure = withMatcher(
  (error: Error): FetchCategoriesFailure =>
    createAction(CategoriesActionTypes.fetchCategoriesFailure, error)
);
