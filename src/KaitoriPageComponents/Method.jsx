import React, { useState } from "react";
import './Method.css'

const Method = () => {
  const [activeCategory, setActiveCategory] = useState("jittaku");

  const categories = [
    { id: "jittaku", label: "自宅買取", image: "jitaku.png" },
    { id: "tenpo", label: "店舗買取", image: "tentou.png" },
    { id: "quick", label: "クイックコース", image: "quickcourse.png" },
  ];

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className="method-container">
      <div className="method-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`method-btn ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="method-content">
        {categories.map((category) => (
          <div
            key={category.id}
            className="method-item"
            style={{ display: activeCategory === category.id ? "block" : "none" }}
          >
            <img src={category.image} alt={category.label} />
            <div className="method-btn-group">
              <button className="method-btn">{`${category.label}の詳細はこちら`}</button>
              <button className="method-active-btn">{`${category.label}のお申し込み`}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Method;
