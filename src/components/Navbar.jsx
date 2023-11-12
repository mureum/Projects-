import React from 'react'
import { AiOutlineMenu,AiOutlineSearch } from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

            <div className='flex items-center'>
                <div>
                <AiOutlineMenu size = {30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    E <span className='font-bold'>Clo</span>
                </h1>

                {/* Search bar */}
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'> 
            <AiOutlineSearch size = {20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Clothes, Jewellery, etc...'/>     
        </div>
        
        </div>
    )
}

export default Navbar