import { combineReducers } from "redux";
import { CategoriesReducer } from "./categories/categories.reducer";
import { UserReducer } from "./user/user.reducer";
import { CartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});
