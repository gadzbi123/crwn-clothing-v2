import { createAction } from "../../utils/reducer/reducer.utils";
import { CartActionTypes } from "./cart.types";
export const setCartItems = (newCartItems) =>
  createAction(CartActionTypes.setCartItems, newCartItems);
export const setIsCartOpen = (newIsCartOpen) =>
  createAction(CartActionTypes.setCartOpen, newIsCartOpen);
