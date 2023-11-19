import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold px-2'>
          E <span className='text-blue-500'>Clo</span>
        </h1>
        {/* Search bar */}
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search Clothes, Jewellery, etc...'
        />
      </div>
      {/* Shopping Basket */}
      <button className='bg-black text-white md:flex items-center py-2 px-4 rounded-full'>
        <BsFillCartFill /> Shopping Basket
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
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-4xl font-bold p-4'>
          E <span className='text-blue-500'>Clo</span>
        </h2>
        <ul className='list-none'>
          <li className='py-2 px-4 border-b cursor-pointer'>Orders</li>
          <li className='py-2 px-4 border-b cursor-pointer'>Favorites</li>
          <li className='py-2 px-4 border-b cursor-pointer'>About Us</li>
          <li className='py-2 px-4 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
