import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/main.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AboutUs from './pages/About_Us';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact_Us';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import Therapists from './pages/Therapists'; // Import component Therapists

function App() {
  const scollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />   
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/therapists" element={<Therapists />} /> {/* Thêm route cho trang Therapists */}
      </Routes>
      <Footer />
      <button className="btnTop" onClick={scollToTop}><i className="bi bi-house-door-fill"></i></button>
    </Router>
  );
}

export default App;