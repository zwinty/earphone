import "./BannerAndProduct.css"
import ProductCard from "./ProductCard"
import ProductData from '../ProductData.json';
import { useState,useEffect } from "react";
import ProductCardRaw from "./ProductCardRaw";

const BannerAndProductAfter = () =>{
    const [selectedCategory, setSelectedCategory] = useState("新品");
    const filteredProducts = ProductData.filter((product) => product.category === selectedCategory);
    const categories = [...new Set(ProductData.map((product) => product.category))];
    const recentProduct = [
        {
          "id":1,
          "img":"/product7.png",
          "brand_name": "Nexula",
          "category": "新品",
          "product_name": "イヤホン X1",
          "price": 12000
        },
        {
          "id":2,
          "img":"/product6.png",
          "brand_name": "Zentrix",
          "category": "中古",
          "product_name": "ヘッドホン H2",
          "price": 15000
        },
        {
          "id":3,
          "img":"/product5.png",
          "brand_name": "Audivox",
          "category": "新品",
          "product_name": "ポータブルスピーカー S1",
          "price": 9000
        },
        { 
          "id":4,
          "img":"/product4.png",
          "brand_name": "Sonivus",
          "category": "買取",
          "product_name": "イヤホン Y1",
          "price": 6000
        }
    ]
    
    return(
        <>
        <div className="banner-product-container">
        <div className="banner-container">

<img className="banner-img" src="./banner-s1.webp" alt="" />
<img className="banner-img" src="./banner-s2.webp" alt="" />
<img className="banner-img" src="./banner-s3.webp" alt="" />
<img className="banner-img" src="./banner-s4.webp" alt="" />
<img className="banner-img" src="./banner-s5.webp" alt="" />
<img className="banner-img" src="./banner-s6.webp" alt="" />
<img className="banner-img" src="./banner-s7.webp" alt="" />
<img  className="banner-img"src="./banner-s8.webp" alt="" />
</div>

<div className="product-container">
<div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-cards">
        <ProductCard item={filteredProducts} />
      </div>
      <div className="recently-check">
        <h2>最近チェックした商品</h2>
        <div className="recently-product">
        {recentProduct.map(product => (
          <ProductCardRaw key={product.id} product={product} />
        ))}
        </div>     
    </div>
    </div>
    </div>

    
        </>
        
    )
}

export default BannerAndProductAfter