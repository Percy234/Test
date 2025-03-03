import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import CartBtn from './components/CartBtn';
import PageViewCounter from './components/ViewCounter'; //import component PageViewCounter

function App() {
  const [showCart, setShowCart] = useState(false);
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
      <Link to="/cart"><button className="btnShop-Mobile" ><i className="bi bi-cart-dash"></i></button></Link>
    </Router>
  );
}

export default App;