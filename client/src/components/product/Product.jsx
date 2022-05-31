import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import {Link} from "react-router-dom";
import "./Product.css";

const Product = ({item}) => {
  return (
    <div className="product-container">
        <div className="circle"></div>
        <img src={item.img} alt=""/>
        <div className="product-info">
            <div className="product-icon">
            <ShoppingCartOutlined />
            </div>
            <div className="product-icon">
            <Link to={`/product/${item._id}`}>
            <SearchOutlined />
            </Link>
            </div>
            <div className="product-icon">
            <FavoriteBorderOutlined />
            </div>
        </div>
    </div>
  )
}

export default Product