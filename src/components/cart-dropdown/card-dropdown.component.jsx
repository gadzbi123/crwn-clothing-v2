import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../contexts/card.context";
import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
const CardDropdown = () => {
  const { cartItems } = useContext(CardContext);
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
          <Link to={"/checkout"}>
            <Button>Check out</Button>
          </Link>
        </>
      )}
    </div>
  );
};
export default CardDropdown;
