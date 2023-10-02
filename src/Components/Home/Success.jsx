import React from 'react'

export default function Success() {
  return (
    <div>
      {/* Success stories */}
      <div className='flex flex-wrap bg-gray-900 md:w-[1348px]'>

        
          <img className='md:w-96 h-72 md:ml-44 ml-16 mt-4 rounded-xl' src="https://brandwear.co.nz/cdn/shop/products/aurora-adults-kids-training-warm-up-top-black-WTT_1200x.jpg?v=1643740470" alt="image" />
       
          <div>
           <p className='mt-12 ml-5 font-bold text-[30px] text-white'>SUCCESS</p>
           <p className=' ml-5 mt-10 text-yellow-400'>Real Stories</p>
           <p className='text-[15px] text-white ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Amet impedit magni omnis iusto quibusdam repellat hic, <br />eos fugiat fuga ducimus!</p>
           <p className='ml-5 mt-5 t text-white'>Drone Rathore</p>
           <p className='ml-5 text-white'>CEO</p>
          </div>
      </div>
       
       {/* Multimedia section */}
      <div className='bg-gray-900 pt-10 '>
         <p className='text-white font-bold text-2xl md:pl-[550px] pl-5'>READ . WATCH . LISTEN .</p>
         <p className='text-white md:pl-[450px] pl-5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, unde.</p>
      </div>

      <div className="flex flex-wrap bg-gray-900 pt-10 justify-center pb-10 ">
           
           {/* First card start */}
         <div className='bg-gray-800 rounded-2xl md:mt-1 '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}         stroke="currentColor" className="w-36 h-36 p-12 text-orange-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
           </svg>
            <p className='text-white text-sm bg-gray-950 text-center'> Read</p>
         </div>
         {/* First Card End */}
 
            {/* Second card start */}
         <div className='bg-gray-800 rounded-2xl md:ml-44 ml-10 md:mt-1'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-36 h-36 p-12 text-orange-700">
           <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>

            <p className='text-white text-sm bg-gray-950 text-center'> Watch</p>
         </div>
         {/* Second Card End */}

           {/* Third card start */}
           <div className='bg-gray-800 rounded-2xl md:ml-44 md:mt-1 mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-36 h-36 p-12 text-orange-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
           </svg>

            <p className='text-white text-sm bg-gray-950 text-center'> Listen</p>
         </div>
         {/* Third Card End */}

      </div>
    </div>
  )
}
