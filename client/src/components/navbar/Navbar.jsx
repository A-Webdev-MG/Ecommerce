import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="language">En</span>
          <div className="navbar-search">
            <input type="text" placeholder="search"/>
            <Search style={{color:"gray", fontSize:16}}/>
          </div>
        </div>
        <div className="navbar-center">
          <h1>MG SHOP.</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">REGISTER</div>
          <div className="navbar-menu">SIGN IN</div>
          <Link to="/cart">
          <div className="navbar-menu">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
