import React from "react";

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
            
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                <span className='text-blue-500'>Elevate</span> Your Style
                </h1>
                <h1 className='drop-shadow-lg hover:drop-shadow-xl px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold shadow-md'> 
                Shop with a<span className='drop-shadow-lg text-blue-500'> Smile</span>
                </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXMlMjBoaWdoJTIwcmVzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
        </div>
    </div>
    )
    }

export default Hero