import React from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./Product.jsx";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Alex's online shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
