import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { CartItem } from "./cart.types";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  ({ cartItems }) => cartItems
);
export const selectCartCount = createSelector([selectCartItems], (CartItems) =>
  CartItems.reduce(
    (total: number, cartItem: CartItem) => total + cartItem.quantity,
    0
  )
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (CartItems): number =>
    CartItems.reduce(
      (total, cartItem: CartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  ({ isCartOpen }) => isCartOpen
);
