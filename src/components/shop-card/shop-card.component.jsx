import { Component } from "react";
import "./shop-card.styles.scss";
export class ShopCard extends Component {
  render() {
    const { id, name, price, imageUrl } = this.props;
    return (
      <div className="shop-item" key={id}>
        <div className="img-container">
          <img alt={"image " + name} src={imageUrl} />
          <button className="add-to-card-block">Add to card</button>
        </div>
        <footer className="labels">
          <h2>{name}</h2>
          <h3>{price}</h3>
        </footer>
      </div>
    );
  }
}
