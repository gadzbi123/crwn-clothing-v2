import { createContext, useState } from "react";

export const CardListContext = createContext({ CardList: [] });

export const CardListProvider = ({ children }) => {
  const [CardList, setCardList] = useState([]);
  const value = { CardList, setCardList };
  return (
    <CardListContext.Provider value={value}>
      {children}
    </CardListContext.Provider>
  );
};
