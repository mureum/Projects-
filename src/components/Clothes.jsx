import React, { useState } from 'react';
import { info } from '../info/info.js';

const Clothes = () => {
    const [clothes] = useState(info);

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-blue-900 font-bold text-7xl text-center mb-8 '>
               Catalogue
            </h1>

            {/* Display clothes */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {clothes.map((item, index) => (
                    <div
                        key={index}
                        className='border-black border-double shadow-lg rounded-lg transform hover:scale-105 duration-300 overflow-hidden'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500'>
                            <p className='text-white font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-blue-500 text-white p-1 rounded-full'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clothes;
