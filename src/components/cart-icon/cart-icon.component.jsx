import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { CartIconContainer } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
