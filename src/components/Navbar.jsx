import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer text-white'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold px-2 text-white'>
          E <span className='text-yellow-400'>Clo</span>
        </h1>
        {/* Search bar */}
      </div>
      <div className='bg-white/20 rounded-full flex items-center px-4 w-[250px] sm:w-[400px] lg:w-[500px] shadow-md'>
        <AiOutlineSearch size={20} className='text-white mr-2' />
        <input
          className='bg-transparent p-2 w-full focus:outline-none text-white placeholder-white'
          type='text'
          placeholder='Search Clothes, Jewellery, etc...'
        />
      </div>
      {/* Shopping Basket */}
      <button className='bg-pink-500 text-white md:flex items-center py-2 px-4 rounded-full gap-x-1.5'>
        <BsFillCartFill />
        <div>Shopping Basket</div>
      </button>
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}
      {/* Side Draw menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-gradient-to-r from-pink-500 to-purple-500 z-10 duration-100'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-gradient-to-r from-pink-500 to-purple-500 z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer text-white'
        />
        <h2 className='text-4xl font-bold p-4 text-white'>
          E <span className='text-yellow-400'>Clo</span>
        </h2>
        <ul className='list-none'>
          <li className='py-2 px-4 border-b cursor-pointer text-white'>Orders</li>
          <li className='py-2 px-4 border-b cursor-pointer text-white'>Favorites</li>
          <li className='py-2 px-4 border-b cursor-pointer text-white'>About Us</li>
          <li className='py-2 px-4 cursor-pointer text-white'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
