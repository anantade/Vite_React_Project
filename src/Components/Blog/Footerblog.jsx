import React from 'react'

export default function Footerblog() {
  return (
    <div>
        {/* Upper footer part */}
      <div className='bg-gray-800 pb-10 flex flex-wrap'>
        <div>
            <p className='text-white md:pl-[20px] ml-4 pt-7 text-3xl'>START LIVING THE LIFE OF <br /> YOUR DREAM</p>
         
            <p className='text-gray-400 md:pl-[20px] ml-4 pt-7 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Eveniet impedit blanditiis vel dicta quas quae consequatur <br /> quisquam architecto eligendi modi?</p>

            <input className=' mt-7 w-96 h-10 bg-gray-700 ml-7 rounded-lg text-sm pl-2' type="text" placeholder=' Your email' />
        </div>

         <div>
            <img src="https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmljdG9yeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className='w-80 h-80 mt-7 md:ml-80 ml-6 rounded-xl' alt="" />
         </div>

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
