import React from 'react';

function Main({ onButtonClick }) {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center" >
      <h1 className="text-white text-4xl font-bold mb-4">Main</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onButtonClick}>
        Show Webpage
      </button>
    </div>
  );
}

export default Main;
