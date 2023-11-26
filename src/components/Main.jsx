import React from 'react';

function Main({ onButtonClick }) {
  return (
    <div>
      <h1>Main</h1>
      <button onClick={onButtonClick}>Show Webpage</button>
    </div>
  );
}

export default Main;
