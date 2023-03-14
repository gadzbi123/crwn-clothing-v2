import { useContext } from "react";
import { CardContext } from "../../contexts/card.context";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    decrementItemFromCart,
    removeItemFromCart,
  } = useContext(CardContext);
  return (
    <div className="checkout">
      <div className="info-row">
        <h2>Product</h2>
        <h2>Description</h2>
        <h2>Quantity</h2>
        <h2>Price</h2>
        <h2>Remove</h2>
      </div>
      <div className="cart-items">
        {cartItems.map(({ quantity, name, imageUrl, price, id }) => {
          return (
            <div className="cart-item">
              <img alt={name} src={imageUrl} />
              <h2>{name}</h2>
              <div>
                <button
                  onClick={() =>
                    decrementItemFromCart({
                      quantity,
                      name,
                      imageUrl,
                      price,
                      id,
                    })
                  }>{`<`}</button>
                {quantity}
                <button
                  onClick={() =>
                    addItemToCart({ quantity, name, imageUrl, price, id })
                  }>{`>`}</button>
              </div>
              <h2>{price}</h2>
              <button
                onClick={() =>
                  removeItemFromCart({ quantity, name, imageUrl, price, id })
                }>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Checkout;
