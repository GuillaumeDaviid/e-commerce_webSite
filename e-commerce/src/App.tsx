import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import './App.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
