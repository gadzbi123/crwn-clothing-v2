import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../contexts/card.context";
import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
const CardDropdown = () => {
  const { cartItems } = useContext(CardContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      {!cartItems.length && <p className="empty-message">Cart is empty</p>}
      {cartItems.length > 0 && (
        <>
          <div className="cart-items">
            {cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })}
          </div>
          <Button onClick={navigateToCheckout}>Check out</Button>
        </>
      )}
    </div>
  );
};
export default CardDropdown;
