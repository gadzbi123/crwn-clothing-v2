import { useContext, useEffect, useState } from "react";
import ShopItem from "../../components/shop-item";
import { ProductsContext } from "../../contexts/products.context";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-items">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <div className="shop-item" key={id}>
            <img alt={"image " + name} src={imageUrl} />
            <h2>{name}</h2>
            <h3>{price}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
