import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hero from './components/Hero';
import Clothes from './components/Clothes';

function App() {
  const [showPage, setShowPage] = useState(false);

  const handleButtonClick = () => {
    setShowPage(true);
  };

  return (
    <div>
      {showPage ? (
        <div>
          <Navbar />
          <Hero />
          <Clothes />
        </div>
      ) : (
        <Main onButtonClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;
