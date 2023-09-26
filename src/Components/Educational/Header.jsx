import React from 'react'

export default function Header() {
  return (
    <div>

      <div className='bg-[url("https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg")] hidden md:block bg-center bg-cover h-[400px] w-[100%] '>
        <div className="bg-black/75 relative  h-[400px] w-[100%]">
          <p className="  text-white pt-28 pl-20 text-[35px] font-bold">
            Educational
          </p>
          <p className="text-gray-400 pt-5 pl-20 text-[12px]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Deleniti, error quibusdam! Reiciendis veniam magnam <br /> cum quisquam animi sunt dolore nemo debitis quas <br /> aliquam minima corrupti officia, ipsam at! Quam, atque.
          </p>
        </div>
      </div>

      <div className='bg-[url("https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg")] block md:hidden bg-center bg-cover h-96 w-[100%] '>
        <div className="bg-black/75 relative  h-96 w-[100%]">
          <p className="  text-white pt-28 pl-20 text-[35px] font-bold">
            Educational
          </p>
          <p className="text-gray-400 pt-5 pl-20 text-[12px]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Deleniti, error quibusdam! Reiciendis veniam magnam <br /> cum quisquam animi sunt dolore nemo debitis quas <br /> aliquam minima corrupti officia, ipsam at! Quam, atque.
          </p>
        </div>
      </div>

    </div>
  )
}
