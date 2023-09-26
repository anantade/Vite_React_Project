import React from 'react'
// import { IMAGES } from '../Images/images'; 

export default function Logosection() {
  return (
    <div className='flex flex-wrap bg-gray-900 '>
       <div className='md:ml-36 ml-10'>
         <img className='w-[100px] rounded-xl' src="https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/inc-logo_16x9.webp" alt="logo" />
       </div>

       <div className='md:ml-48 ml-[90px] rounded-md'>
          <img className='w-[150px] rounded-xl' src="https://www.roadzen.io/images/fortune.png" alt="logo" />
       </div>

       <div className='md:ml-48 ml-10 rounded-md'>
          <img className='w-[150px] rounded-xl' src="https://w7.pngwing.com/pngs/0/174/png-transparent-forbes-hd-logo.png" alt="logo" />
       </div>

       <div className='md:ml-48 ml-10 rounded-md'>
          <img className='w-[125px] rounded-xl' src="https://www.nicepng.com/png/full/178-1780172_g-logos-procter-gamble.png" alt="logo" />
       </div>

    </div>
  )
}
