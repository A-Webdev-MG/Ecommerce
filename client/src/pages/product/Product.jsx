import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsLetter/Newsletter";
import "../product/Product.css";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {addProduct} from "../../redux/cartRedux";
import {useDispatch} from "react-redux";

const Product = () => {
  const location = useLocation();
  const id  = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/find/${id}`)
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [id]);

  const decQuantity = () => {
    quantity>1 && setQuantity(quantity - 1);
  }

  const incQuantity = () => {
    setQuantity(quantity + 1);
  }

  const handleClick = () => {
      //update cart
    dispatch(
      addProduct({...product, quantity, color, size})
    );
  }

  return (
    <div className="productPage-container">
      <Navbar />
      <Announcement />
      <div className="productPage-wrapper">
        <div className="productPageImg-container">
          <img src={product.img} alt="" />
        </div>
        <div className="productPageInfo-container">
          <h1 className="productPageInfo-title">{product.title}</h1>
          <p className="productPageInfo-desc">
            {product.desc}
          </p>
          <span className="productPageInfo-price">{`Rs.${product.price}/-`}</span>
          <div className="productFilter-container">
            <div className="productFilter">
              <span className="productFilter-title">Color</span>
              {(product.color || []).map(c => (
                <div className="productFilter-color" style={{backgroundColor: `${c}`}} key={c} onClick={()=> setColor(c)}></div>
              ))} 
            </div>
            <div className="productFilter">
              <span className="productFilter-title">Size</span>
              <select className="productFilter-size" onChange={(e)=> setSize(e.target.value)}>
                {(product.size || []).map(s => (
                  <option value={`${s}`} key={s}>
                     {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="productPageAdd-container">
              <div className="productPageAmount-container">
                  <Remove onClick={decQuantity} />
                  <span className="productPageAmount">{quantity}</span>
                  <Add onClick={incQuantity}/>
              </div>
              <button onClick={handleClick}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
