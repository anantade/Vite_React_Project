import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Upper footer part */}
      <div className='bg-gray-800  '>
         <p className='text-white md:pl-[400px] ml-4 pt-7 text-3xl'>START LIVING THE LIFE OF YOUR DREAM</p>
         <p className='text-white md:pl-[450px] ml-4 pt-7 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, officiis.</p>
          <button className='md:ml-[620px] ml-36  mb-10 rounded-xl w-28 h-14 mt-10 hover:bg-white bg-orange-600'>Start Now</button>
      </div>

      {/* Lower footer part */}

         {/* First Container */}
      <div className='bg-black flex flex-wrap pt-10'>
        <div>
            <p className='md:pl-20 pl-24 text-white md:font-sans text-2xl '><b>MR. INDER SINGH</b></p>
            <p className='md:pl-20 pl-24 text-white md:font-sans text-[10px] '>Motivational speaker</p>
        </div>
         
         {/* Second Container */}
         <div className='md:ml-36 ml-28 pt-5'>
           <p className='text-white text-lg'>Products</p><br />
           <p className='text-white text-sm '>Books</p><br />
           <p className='text-white text-sm '>Mobile Brands</p><br />
           <p className='text-white text-sm '>Clothing Brands</p><br />
           <p className='text-white text-sm '>Dairy Products</p><br />
           <p className='text-white text-sm '>Resturant</p>

         </div>

           {/* Third Container */}
           <div className='md:ml-36 ml-28 pt-5'>
           <p className='text-white text-lg'>Who I am</p><br />
           <p className='text-white text-sm '>Eduction </p><br />
           <p className='text-white text-sm '>Experince</p><br />
           <p className='text-white text-sm '>Human</p><br />
           <p className='text-white text-sm '>Success Stories</p><br />
           <p className='text-white text-sm '>Achiviment</p><br />
           <p className='text-white text-sm '>Vision</p>

         </div>
           {/* Fourth Container */}
           <div className='md:ml-36 ml-28 pt-5'>
           <p className='text-white text-lg'>Follow us</p><br />

            <div className='flex '>
              <img className='w-36 h-20' src="https://clipart-library.com/new_gallery/227-2271557_other-transparent-background-social-media-icons-vector.png" alt="" />
            </div>
         </div>
           
      </div>

    </div>
  )
}
