import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        {/* Add other routes here */}
      </Routes>
      <main>
        <h2>Welcome to My App</h2>
        <p>This is the main content of the app.</p>
        <Button label="youtube" url="https://youtube.com"/>
      </main>
      <Footer />
    </Router>
  );
}

export default App;