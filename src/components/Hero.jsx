import React from "react";

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    Elevate Your <span className='text-blue-500'>Style</span>
                </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> 
                Shop with a<span className='text-blue-500'>Smile</span>
                </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
    </div>
    )
    }

export default Hero