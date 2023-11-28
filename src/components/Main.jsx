import React from 'react';

function Main({ onButtonClick }) {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")'}}>
      <h4 className='text-3xl sm:text-4xl lg:text-8xl font-bold px-10 py-10 text-white'>
          <div class="font-custom">Culture Shock</div>
      </h4>
      <button className="bg-blue-500 text-white px-8 py-2 rounded" onClick={onButtonClick}>
        Show Webpage
      </button>
    </div>
  );
}

export default Main;
