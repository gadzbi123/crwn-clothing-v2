import { CartActionTypes } from "./cart.types";

export const CartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.setCartItems:
      return { ...state, cart: payload };
    case CartActionTypes.setCartOpen:
      return { ...state, cart: payload };
    default:
      return state;
  }
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
