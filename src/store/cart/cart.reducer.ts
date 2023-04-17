import { AnyAction } from "redux";

import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItemType } from "./cart.types";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItemType[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
