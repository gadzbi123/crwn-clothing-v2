import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CartActionTypes, CartItem } from "./cart.types";

export type SetCartItems = ActionWithPayload<
  CartActionTypes.setCartItems,
  CartItem[]
>;
export type SetCartIsOpen = ActionWithPayload<
  CartActionTypes.setIsCartOpen,
  boolean
>;

const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem!.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setCartItems = withMatcher(
  (newCartItems: CartItem[]): SetCartItems =>
    createAction(CartActionTypes.setCartItems, newCartItems)
);
export const setIsCartOpen = withMatcher(
  (newIsCartOpen: boolean): SetCartIsOpen =>
    createAction(CartActionTypes.setIsCartOpen, newIsCartOpen)
);
export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CartItem): SetCartItems => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
  }
);
export const removeItemToCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem): SetCartItems => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
  }
);
export const clearItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToClear: CartItem): SetCartItems => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
  }
);
