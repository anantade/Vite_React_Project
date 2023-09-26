import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-wrap bg-stone-950'>
        {/* left side of container */}
      <div className='pt-36 pl-[80px]' >
         <p className='text-white text-3xl'>DRON RATHORE IN PERSON <br />UPW OF 2022</p>
         <p className='text-white text-[10px] pt-2'>Dron Rathore in florida this november to transform <br /> your life and become firewalker</p>
         <button className='bg-orange-500 content-center font-bold w-44 h-10 rounded-xl mt-3'>Get Your Ticket now</button>
      </div>

      {/* Right side of container */}

      <div className='md:ml-[200px]'>
        <img className='md:h-[500px] h-[550px] w-[410px] mt-3' src="https://img.freepik.com/premium-photo/young-man-suit-man-with-beard-male-portrait-black-background-stylish-man-black-white-photo-male-model-studio-portrait-guy-classic-suit_154724-54.jpg" alt="image" />
      </div>
    </div>
  )
}
