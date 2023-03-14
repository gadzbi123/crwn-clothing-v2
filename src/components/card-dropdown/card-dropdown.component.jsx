import Button from "../buttons/button.component";
import "./cart-dropdown.styles.scss";
const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <p className="empty-message"></p>
      <div className="cart-items" />
      <Button>Check out</Button>
    </div>
  );
};
export default CardDropdown;
