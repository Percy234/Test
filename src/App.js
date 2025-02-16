import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Button from './components/Button';
import AboutUs from './pages/About_Us';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} /> 
        {/* Add the new Route here */ }
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;