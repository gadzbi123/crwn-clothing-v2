import { memo } from "react";
import type { CartItemType } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
const CartItem = memo(({ cartItem }: { cartItem: CartItemType }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
