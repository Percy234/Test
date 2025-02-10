import React from 'react';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Header component
import Button from './components/Button'; // Import Header component

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My App</h2>
        <p>This is the main content of the app.</p>
        <Button label="youtube" url="https://youtube.com"/>
      </main>
      <Footer />
    </div>
  );
};

export default App;