import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categories.action";
import { CategoriesActionTypes } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CategoriesActionTypes.fetchCategoriesStart,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
