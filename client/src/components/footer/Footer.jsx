import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h1 className="footer-logo">MG Shop.</h1>
            <p className="footer-desc">
                There are Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque dolor rerum aliquam iusto minus animi quae veniam ipsam quo in!
            </p>
            <div className="footer-socialIcons">
                <div className="footer-icons" style={{backgroundColor: '#3B5999'}}>
                    <Facebook/>
                </div>
                <div className="footer-icons" style={{backgroundColor: '#E4405F'}}>
                    <Instagram />
                </div>
                <div className="footer-icons" style={{backgroundColor: '#55ACEE'}}>
                    <Twitter />
                </div>
                <div className="footer-icons" style={{backgroundColor: '#E60023'}}>
                    <Pinterest />
                </div>
            </div>
        </div>
        <div className="footer-center">
            <h3 className="footer-center-title">
                Useful Links
            </h3>
            <ul className="footer-lists">
                <li className="footer-listItems">Home</li>
                <li className="footer-listItems">Cart</li>
                <li className="footer-listItems">Man Fashion</li>
                <li className="footer-listItems">Woman Fashion</li>
                <li className="footer-listItems">Accessories</li>
                <li className="footer-listItems">My Account</li>
                <li className="footer-listItems">Order Tracking</li>
                <li className="footer-listItems">Wishlist</li>
                <li className="footer-listItems">Terms</li>
                <li className="footer-listItems"></li>
            </ul>
        </div>
        <div className="footer-right">
            <h3 className="footer-right-title">Contact</h3>
            <div className="contact-items">
                <Room style={{marginRight: "10px"}}/> 522 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eligendi!
            </div>
            <div className="contact-items">
                <Phone style={{marginRight: "10px"}}/> +123 456 7890
            </div>
            <div className="contact-items">
                <MailOutline style={{marginRight: "10px"}}/> contact@developer.com
            </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className="payment-img" />
        </div>
    </div>
  )
}

export default Footer