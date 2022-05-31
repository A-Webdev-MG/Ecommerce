import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Success from './pages/success/Success';
import Cart from './pages/cart/Cart';
import ProductList from './pages/productList/ProductList';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Product from './pages/product/Product';


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return( 
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element= { user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
      </Routes>
    </Router>
  )
};

export default App;