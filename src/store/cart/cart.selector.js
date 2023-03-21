import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;
const selectIsCartOpenReducer = (state) => state.cart.isCartOpen;

export const selectCartItems = createSelector(
  [selectCartReducer],
  ({ cartItems }) => cartItems
);
export const selectCartCount = createSelector([selectCartItems], (CartItems) =>
  CartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (CartItems) =>
  CartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
export const selectIsCartOpen = createSelector(
  [selectIsCartOpenReducer],
  (isCartOpen) => isCartOpen
);
