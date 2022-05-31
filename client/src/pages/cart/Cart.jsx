import React from 'react';
import "../cart/Cart.css";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../../requestMethods';


const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();


  const onToken = (token)=> {
    setStripeToken(token);
  }
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment-intents", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success",{state:{data: res.data, cart:cart}});
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate]);

  return (
    <div className="cart-container">
        <Navbar/>
        <Announcement/>
        <div className="cart-wrapper">
            <h1 className="cart-title">YOUR BAG</h1>
            <div className="cart-top">
                <button className="cartTop-button">CONTINUE SHOPPING</button>
                <div className="cartToptext-container">
                    <span>Shopping Bag(2)</span>
                    <span>Your Wishlist(0)</span>
                </div>
                <button className="cartTop-button">CHECKOUT NOW</button>
            </div>
            <div className="cart-bottom">
              <div className="cart-info">
                  {cart.products.map(product =>(
                   <div className="cart-product">
                    <div className="cart-productDetail">
                      <img src={product.img} alt="" />
                      <div className="cart-details">
                        <span className="cart-productName"><b>Product:</b> {product.title}</span>
                        <span className="cart-productId"><b>ID:</b> {product._id}</span>
                        <div className="cart-productColor" style={{backgroundColor:`${product.color}`}}></div>
                        <span className="cart-productSize"><b>Size:</b> {product.size}</span>
                      </div>
                    </div>
                    <div className="cart-priceDetail">
                      <div className="cart-productAmountContainer">
                        <Remove/>
                        <div className="cart-productAmount">{product.quantity}</div>
                        <Add/>
                      </div>
                      <div className="cart-productPrice">Rs.{product.price*product.quantity}/-</div>
                    </div>
                  </div>))}
                  <hr />
              </div>
              <div className="cart-summary">
                <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">Subtotal</span>
                  <span className="cart-summaryItemPrice">Rs.{cart.total}/-</span>
                </div>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">Estimated Shipping</span>
                  <span className="cart-summaryItemPrice">Rs.590/-</span>
                </div>
                <div className="cart-summaryItem">
                  <span className="cart-summaryItemText">Shipping Discount</span>
                  <span className="cart-summaryItemPrice">Rs.-590/-</span>
                </div>
                <div className="cart-summaryItem" style={{fontWeight: "bold", fontSize: 24}}>
                  <span className="cart-summaryItemText">Total</span>
                  <span className="cart-summaryItemPrice">Rs.{cart.total}/-</span>
                </div>
                <StripeCheckout
                name='MG shop'
                image='https://ibb.co/0DJNX2M'
                billingAddress
                shippingAddress
                description={`your total is RS.${cart.total}/-`}
                amount={cart.total*100}
                currency="USD"
                token={onToken}
                stripeKey={KEY}>
                <button className="cartSummary-btn">CHECKOUT NOW</button>
                </StripeCheckout>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart