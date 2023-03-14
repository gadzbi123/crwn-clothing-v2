import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";

import { CardContext } from "../../contexts/card.context";
import "./cart-icon.styles.scss";
const CardIcon = () => {
  const { sumOfProducts } = useContext(CardContext);
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);
  const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{sumOfProducts}</span>
    </div>
  );
};
export default CardIcon;
