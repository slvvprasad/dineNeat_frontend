// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Navbar from "./Navbar";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from 'react-use-cart';

function Book() {
  return (
    <div>
        <Navbar/>
        <CartProvider>
        <Products/>
        <Cart/>
     
      
      </CartProvider>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
       
        </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default Book;