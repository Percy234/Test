import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/main.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Button from './components/Button';
import AboutUs from './pages/About_Us';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services'; // Import component Services
import Contact from './pages/Contact_Us'; // Import component Contact

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
        <Route path="/services" element={<Services />} /> {/* Thêm route cho trang Services */}
        <Route path="/contact" element={<Contact />} /> {/* Thêm route cho trang Contact */}
      </Routes>
      <button className="btnTop" onClick={scollToTop}><i className="bi bi-house-door-fill"></i></button>
      <Footer />
    </Router>
  );
}

export default App;