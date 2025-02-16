import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Button from './components/Button';
import AboutUs from './pages/About_Us';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;