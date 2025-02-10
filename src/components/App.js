import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Header component
import Button from './Button'; // Import Header component

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My App</h2>
        <p>This is the main content of the app.</p>
        <Button label="youtube" url="https://youtube.com"/>
        <Button label="Facebook" url="https://facebook.com"/>
        <Button label="tiktok" url="https://tiktok.com"/>
      </main>
      <Footer />
    </div>
  );
};

export default App;