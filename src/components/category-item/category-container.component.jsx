import { Component } from "react";
import "./category.styles.scss";
class CategoryContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { clothesType, imageUrl } = this.props.container;
    return (
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{clothesType}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  }
}
export default CategoryContainer;
