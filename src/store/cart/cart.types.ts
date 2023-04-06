import { CategoryItem } from "../categories/categories.types";

export enum CartActionTypes {
  setCartItems = "cart/SET_CART_ITEMS",
  setIsCartOpen = "cart/SET_IS_CART_OPEN",
}
export type CartItem = CategoryItem & {
  quantity: number;
};
