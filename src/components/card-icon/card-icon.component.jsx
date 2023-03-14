import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CardListContext } from "../../contexts/card-list.context";
import { CardContext } from "../../contexts/card.context";
import "./cart-icon.styles.scss";
const CardIcon = () => {
  const { CardList } = useContext(CardListContext);
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);
  const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{CardList.length}</span>
    </div>
  );
};
export default CardIcon;
