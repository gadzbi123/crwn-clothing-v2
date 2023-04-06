export enum CategoriesActionTypes {
  setCategories = "categories/SET_CATEGORIES",
  fetchCategoriesStart = "categories/FETCH_CATEGORIES_START",
  fetchCategoriesSuccess = "categories/FETCH_CATEGORIES_SUCCESS",
  fetchCategoriesFailure = "categories/FETCH_CATEGORIES_FAILURE",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
