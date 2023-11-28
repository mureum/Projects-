import React from 'react';

function Main({ onButtonClick }) {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")'}}>
      <h1 className="text-white text-4xl font-bold mb-4">Main</h1>
      <button className="bg-blue-500 text-white px-8 py-2 rounded" onClick={onButtonClick}>
        Show Webpage
      </button>
    </div>
  );
}

export default Main;
