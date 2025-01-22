import React, { Fragment } from 'react';
import { FaRegHeart } from "react-icons/fa";
import './ProductCard.css';


const ProductCard = ({item = []}) => {
  console.log(item);

  return (
    <Fragment>
        {
          item.map((val)=>(
           
            <div className="card-container" key={val.id}>
              <img className='img' src={val.img} alt="product-photo" />
            <div className="brand">
              <p className="product-brand">{val.brand_name}</p>
              <FaRegHeart className="nav-icon" />
            </div>
            <p className="product-name">{val.product_name}</p>
            <p className="product-price"> <span className="currency">¥</span>{val.price}<small>  (税込)</small></p>
            </div>
        
            
          ))}   
      
      
    </Fragment>
  );
};

export default ProductCard;
