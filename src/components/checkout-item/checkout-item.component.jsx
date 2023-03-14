import { useContext } from "react";
import { CardContext } from "../../contexts/card.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ item }) => {
  const { id, name, quantity, imageUrl, price } = item;
  const { addItemToCart, decrementItemFromCart, removeItemFromCart } =
    useContext(CardContext);
  const addItem = () => addItemToCart(item);
  const decrementItem = () => decrementItemFromCart(item);
  const removeItem = () => removeItemFromCart(item);

  return (
    <div key={id} className="checkout-item-container">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <h2 className="name">{name}</h2>
      <div className="quantity">
        <span onClick={decrementItem}>{`<`}</span>
        <p>{quantity}</p>
        <span onClick={addItem}>{`>`}</span>
      </div>
      <h2 className="price">${price}</h2>
      <span className="remove-button" onClick={removeItem}>
        ✖
      </span>
    </div>
  );
};
export default CheckoutItem;
