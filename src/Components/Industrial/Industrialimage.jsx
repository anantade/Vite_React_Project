import React from 'react'

export default function Industrialimage() {
  return (
    <div>
        
       {/* Image section */}
      <div className='bg-[url("https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")] md:block hidden bg-center bg-cover  h-[400px] w-[100%] '>
       <div className='pt-44 pl-20 pb-[120px] bg-gradient-to-r from-black/100 from-15% via-black/95 via-30% to-black/20 to-50% '>
        <p className='text-white text-3xl font-bold'>Industrial</p>
        <p className='text-gray-400 pt-2 text-sm '>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Facilis illo quae delectus eius, <br />nesciunt ipsa!</p>
       </div>
      </div>
        
        {/* services */}

        <div className='bg-gray-800 flex flex-wrap pb-5'>

         <div className=' pl-20 '>
            <p className='pt-5 text-sm text-gray-400'>Our Services</p>
            <p className='pt-2 text-2xl text-white'>Major Contributer <br />Of Business</p>
         </div>
          
          {/* First section */}
          <div className='mt-12 md:ml-28 ml-[26.70%]'>
            <p className='rounded-full text-white bg-orange-500 text-xs w-8 h-8 text-center pt-2'>60%</p>
          </div>
          <div className='md:mt-12 mt-12 ml-2'>
            <p className='text-white text-lg '>Material</p>
          </div>

           {/* Second section */}
           <div className='mt-12 md:ml-14 ml-5'>
            <p className='rounded-full text-white bg-orange-500 text-xs w-8 h-8 text-center pt-2'>10%</p>
          </div>
          <div className='mt-12 ml-2'>
            <p className='text-white text-lg '>Process</p>
          </div>

           {/* Third section */}
           <div className='mt-12 md:ml-14  ml-28'>
            <p className='rounded-full text-white bg-orange-500 text-xs w-8 h-8 text-center pt-2'>8%</p>
          </div>
          <div className='mt-12 ml-2'>
            <p className='text-white text-lg '>Skill</p>
          </div>

           {/* Forth section */}
           <div className='mt-12 md:ml-14  ml-14'>
            <p className='rounded-full text-white bg-orange-500 text-xs w-8 h-8 text-center pt-2'>12%</p>
          </div>
          <div className='mt-12 ml-2'>
            <p className='text-white text-lg '>Marketing</p>
          </div>

           {/* First section */}
           <div className='mt-12 md:ml-14  ml-28'>
            <p className='rounded-full text-white bg-orange-500 text-xs w-8 h-8 text-center pt-2'>10%</p>
          </div>
          <div className='mt-12 ml-2'>
            <p className='text-white text-lg '>Profit + Tax</p>
          </div>

        </div>
       
   
    </div>
  )
}
