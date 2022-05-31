import { Link } from "react-router-dom";
import React from "react";
import "../categoryItem/CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem-container">
      <Link to={`/products/${item.category}`}>
        <img src={item.img} alt="" className="categoryItem-img" />
        <div className="categoryItem-info">
          <h1 className="categoryItem-title">{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
