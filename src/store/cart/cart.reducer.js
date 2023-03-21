import { CartActionTypes } from "./cart.types";

export const CartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.setCartItems:
      return { ...state, cartItems: payload };
    case CartActionTypes.setIsCartOpen:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};
