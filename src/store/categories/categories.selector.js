import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories.categories;
const selectIsLoadingReducer = (state) => state.categories.isLoading;

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectIsLoadingReducer],
  (isLoading) => isLoading
);
