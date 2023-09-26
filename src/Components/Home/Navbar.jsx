import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='bg-gray-900 flex  pt-2 pb-2'>
        
         <div>
            <p className='md:pl-20 text-white md:font-sans text-2xl '><b>MR. INDER SINGH</b></p>
            <p className='md:pl-20 text-white md:font-sans text-[10px] '>Motivational speaker</p>
         </div>
         
         
         <div className='ml-[40%] pt-3 hidden md:block'>
            <a href="">
                <p className='text-white cursor-pointer'>Who I am</p>
            </a>
         </div>

         <div className='ml-8 pt-3 hidden md:block'>
            <a href="">
               <p className='text-white cursor-pointer'>Service</p>
            </a>
         </div>
         <div className='ml-8 pt-3 hidden md:block'>
            <a href="">
               <p className='text-white cursor-pointer'>Product</p>
            </a>
         </div>
         <div className='ml-8 pt-3 hidden md:block'>
            <a href="">
               <p className='text-white cursor-pointer'>Blog</p>
            </a>
         </div>
         <div className='ml-8 pt-3 hidden md:block'>
            <a href="">
               <p className='text-white cursor-pointer'>Event</p>
            </a>
         </div>

         <div className='ml-8 hidden md:block'>
            <button className='cursor-ponter hover:bg-pink-900 text-white rounded-xl bg-orange-400 w-24 h-12'> Lets Meet</button>
         </div>

         <div className='md:hidden ml-[40%] text-white '>
            <a className='text-4xl' href="#">&#8801;</a>
         </div>
      </nav>
    </div>
  )
}
