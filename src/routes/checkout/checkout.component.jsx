import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CardContext } from "../../contexts/card.context";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems, totalCostFromCart } = useContext(CardContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <span className="total">Total: ${totalCostFromCart}</span>
    </div>
  );
};
export default Checkout;
