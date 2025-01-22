import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import './ProductCard.css';

const ProductCardRaw = ({ product }) => {
  return (
    <div className="card-container" key={product.id}>
      <img className="img" src={product.img} alt="product-photo" />
      <div className="brand">
        <p className="product-brand">{product.brand_name}</p>
        <FaRegHeart className="nav-icon" />
      </div>
      <p className="product-name">{product.product_name}</p>
      <p className="product-price">
        <span className="currency">¥</span>{product.price}
        <small> (税込)</small>
      </p>
    </div>
  );
};

export default ProductCardRaw;
