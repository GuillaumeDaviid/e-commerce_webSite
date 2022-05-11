import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import Detail from './components/Detail'
import './App.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} >
          <Route path=":id" element={<Product />} />
        </Route >
        <Route path="detail" element={<Detail />}>
          <Route path=":id" element={<Detail />}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
