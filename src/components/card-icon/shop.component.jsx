import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { ShopCard } from "../shop-card/shop-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-items">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <ShopCard
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl}
            price={price}
          />
        );
      })}
    </div>
  );
};
export default Shop;
