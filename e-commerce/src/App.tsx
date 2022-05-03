import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
