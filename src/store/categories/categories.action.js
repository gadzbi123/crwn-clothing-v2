import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CategoriesActionTypes } from "./categories.types";
export const fetchCategoriesStart = () =>
  createAction(CategoriesActionTypes.fetchCategoriesStart);
export const fetchCategoriesFailure = (error) =>
  createAction(CategoriesActionTypes.fetchCategoriesFailure, error);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CategoriesActionTypes.fetchCategoriesSuccess, categoriesArray);
//thunk
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (e) {
    dispatch(fetchCategoriesFailure(e.message));
  }
};