import { createContext, useState } from "react";

const addCartItem = (cartItems, newItem) => {
  const exists = cartItems.find((value) => value.id === newItem.id);
  if (!exists) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
};

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};
const decrementCartItem = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1)
    return removeCartItem(cartItems, itemToRemove);
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decrementItemFromCart: () => {},
  sumOfProducts: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [sumOfProducts, setSumOfProducts] = useState(0);

  const addItemToCart = (newCartItem) => {
    setSumOfProducts(sumOfProducts + 1);
    setCartItems(addCartItem(cartItems, newCartItem));
  };
  const removeItemFromCart = (itemToRemove) => {
    setSumOfProducts(sumOfProducts - itemToRemove.quantity);
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const decrementItemFromCart = (itemToRemove) => {
    setSumOfProducts(sumOfProducts - 1);
    setCartItems(decrementCartItem(cartItems, itemToRemove));
  };
  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCart,
    removeItemFromCart,
    decrementItemFromCart,
    cartItems,
    sumOfProducts,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
