import React from 'react'

export default function Achivement() {
  return (
    <div className='bg-gray-800 pb-10'>
       <div>
        <p className='text-white text-4xl md:pl-[42%] pl-24'>Achiviments</p>
       </div>

       <div>
        <p className='text-gray-400 text-xs md:pl-[37%] pl-8 pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, vero.</p>
       </div>

       <div className="flex flex-wrap mt-10">

        {/* First Card */}
          <div className='bg-gray-700 md:ml-40 ml-20 rounded-xl '>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white mt-5 ml-16  ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          
          <p className='text-white text-lg pl-5 pt-5 pr-5'>Grow Your Audiance</p>
          <p className=' text-xs pl-5 pb-3 pr-5 text-gray-400'>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. Quod,<br /> exercitationem.</p>
             
          </div>

          {/* Second Card */}
          <div className='bg-gray-700 md:ml-40 ml-20 md:mt-0 mt-5 rounded-xl '>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white mt-5 ml-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>

          
          <p className='text-white text-lg pl-5 pt-5 pr-5'>Boost Online Sales</p>
          <p className=' text-xs pl-5 pb-3 pr-5 text-gray-400'>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. Quod,<br /> exercitationem.</p>
             
          </div>

          {/* Third Card */}
          <div className='bg-gray-700 md:ml-40 ml-20 md:mt-0 mt-5  rounded-xl '>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white mt-5 ml-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>

          
          <p className='text-white text-lg pl-5 pt-5 pr-5'>Sell Your Knowladge</p>
          <p className='text-gray-400 text-xs pl-5 pb-3 pr-5'>Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. Quod,<br /> exercitationem.</p>
             
          </div>

       </div>

    </div>
  )
}
