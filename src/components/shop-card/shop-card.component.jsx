import { useContext } from "react";
import { CardContext } from "../../contexts/card.context";
import "./shop-card.styles.scss";
export const ShopCard = (props) => {
  const { addItemToCart } = useContext(CardContext);
  const { id, name, price, imageUrl } = props;
  return (
    <div className="shop-item" key={id}>
      <div className="img-container">
        <img alt={"image " + name} src={imageUrl} />
        <button
          className="add-to-card-block"
          onClick={() => addItemToCart({ id, name, price, imageUrl })}>
          Add to card
        </button>
      </div>
      <footer className="labels">
        <h2>{name}</h2>
        <h3>{price}</h3>
      </footer>
    </div>
  );
};
