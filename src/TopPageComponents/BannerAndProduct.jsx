import { useState } from "react";
import "./BannerAndProduct.css";
import ProductCard from "../TopPageComponents/ProductCard";
import ProductData from '../ProductData.json';
import ProductCardRaw from "./ProductCardRaw";
import { Link } from "react-router-dom";

const BannerAndProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("新品を買う");
  const [showMembership, setShowMembership] = useState(true);

  const filteredProducts = ProductData.filter((product) => product.category === selectedCategory);
  const categories = [...new Set(ProductData.map((product) => product.category))];
  const recentProduct = [
    {
      id: 1,
      img: "/product7.png",
      brand_name: "Nexula",
      category: "新品を買う",
      product_name: "イヤホン X1",
      price: 12000,
    },
    {
      id: 2,
      img: "/product6.png",
      brand_name: "Zentrix",
      category: "中古を買う",
      product_name: "ヘッドホン H2",
      price: 15000,
    },
    {
      id: 3,
      img: "/product5.png",
      brand_name: "Audivox",
      category: "新品を買う",
      product_name: "ポータブルスピーカー S1",
      price: 9000,
    },
    {
      id: 4,
      img: "/product4.png",
      brand_name: "Sonivus",
      category: "買取を買う",
      product_name: "イヤホン Y1",
      price: 6000,
    },
  ];

  return (
    <>
      <div className="banner-product-container">
        <div className="banner-container">
          {showMembership && (
            <div className="membership">
              <img src="/member.svg" alt="membership-photo" />
              <button
                className="enroll-now-btn"
                onClick={() => setShowMembership(false)} 
              >
                今すぐ会員登録する
              </button>
              <Link to="/membership"> <button className="membership-see-more">会員登録について</button></Link>
            </div>
          )}
          <img className="banner-img" src="./banner-s1.webp" alt="banner" />
          <img className="banner-img" src="./banner-s2.webp" alt="banner" />
          <img className="banner-img" src="./banner-s3.webp" alt="banner" />
          <img className="banner-img" src="./banner-s4.webp" alt="banner" />
          <img className="banner-img" src="./banner-s5.webp" alt="banner" />
          <img className="banner-img" src="./banner-s6.webp" alt="banner" />
          <img className="banner-img" src="./banner-s7.webp" alt="banner" />
          <img className="banner-img" src="./banner-s8.webp" alt="banner" />
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
          <div className="see-more-btn">
                        <div className="see-more">
                            {selectedCategory !== '買取をする' && (
                              <button className="seemore-item-btn">
                            {`${selectedCategory}をもっと見る`}
                            </button>
                            )}
                        </div>
       
                         {selectedCategory === '買取をする' && (
                            <div className="seemore-kaitori-btn">
                               <button className="seemore-item-btn">
                            {`無料査定を申し込む`}
                            </button>
                            <button className="seemore-item-btn-green">
                            {`買取についてもっと見る`}
                            </button>
                            </div>        
                        )}
                     </div>
          
          <div className="recently-check">
            <h2>最近チェックした商品</h2>
            <div className="recently-product">
              {recentProduct.map((product) => (
                <ProductCardRaw key={product.id} product={product} />
              ))}
            </div>
            <div className="see-more-btn">
                       
                            <button className="seemore-item-btn">
                            もっと見る
                            </button>
                       
                        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAndProduct;
