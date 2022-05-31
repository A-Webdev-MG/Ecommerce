import React, { useState } from 'react';
import "../productList/ProductList.css";
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsLetter/Newsletter';
import Footer from '../../components/footer/Footer';
import { useLocation } from "react-router-dom";

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value,
        });
    }

    const handleSort = (e) => {
        const value = e.target.value;
        setSort(value);
    }
   
  return (
    <div className="productList-container">
        <Navbar />
        <Announcement />
        <h1 className="productList-title">
            {category}
        </h1>
        <div className="filter-container">
            <div className="filter">
            <span className="filter-text">Filter Products:</span>
            <select className="filter-select" name="color" onChange={handleFilter}>
                <option  disabled>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
            </select>
            <select className="filter-select" name="size" onChange={handleFilter}>
                <option  disabled>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
            </div>
            <div className="filter">
            <span className="filter-text">Sort Products:</span>
            <select className="filter-select" onChange={handleSort}>
                <option value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>
            </select>
            </div>
        </div>
        <Products category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList