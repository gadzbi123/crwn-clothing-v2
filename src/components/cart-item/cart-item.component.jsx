import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img alt={name} src={imageUrl} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <p>
          {quantity} x {quantity * price}$
        </p>
      </div>
    </div>
  );
};

export default CartItem;
