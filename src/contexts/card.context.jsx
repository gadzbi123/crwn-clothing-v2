import { createContext, useState } from "react";

const addCardItem = (cartItems, newItem) => {
  const exists = cartItems.find((value) => value.id === newItem.id);
  if (!exists) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
};

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  sumOfProducts: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [sumOfProducts, setSumOfProducts] = useState(0);

  const addItemToCart = (newCartItem) => {
    setCartItems(addCardItem(cartItems, newCartItem));
    setSumOfProducts(sumOfProducts + 1);
  };
  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCart,
    cartItems,
    sumOfProducts,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
