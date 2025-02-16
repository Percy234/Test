import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Button from './components/Button';
import AboutUs from './pages/About_Us';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />   
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add the new Route here */ }
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;