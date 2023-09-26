import React from "react";

export default function Blog() {
  return (
    <div className="bg-gray-900">
      <div>
        <p className="text-white pl-20 text-4xl font-bold">Blog</p>
      </div>

      <div className="flex flex-wrap pb-10">

        {/* First card start */}
        <div className="ml-20">
          <img
            className="w-64 h-64 mt-8  rounded-xl "
            src="https://ii2.pepperfry.com/media/catalog/product/n/i/494x544/niki-fabric-2-seater-sofa-in-vivid-orange-colour-niki-fabric-2-seater-sofa-in-vivid-orange-colour-kovap7.jpg"
            alt=""
          />

          <p className="text-white text-xs">08.08.2021</p>
          <p className="text-white ">
            POWER THROUGH THE PERSONAL <br /> GROWTH
          </p>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Aliquid, numquam.
          </p>
        </div>
        {/* first card end */}

        {/* Second card start */}
        <div className="md:ml-12 ml-20">
          <img
            className="w-64 h-64 mt-8  rounded-xl "
            src="https://m.media-amazon.com/images/I/71Uj+XE2OzL._AC_UF1000,1000_QL80_.jpg"
            alt=""
          />

          <p className="text-white text-xs">08.08.2021</p>
          <p className="text-white ">
            ACCHIVE MORE WITH SMART <br />GOAL
          </p>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Aliquid, numquam.
          </p>
        </div>
        {/* Second card end */}

        {/* Third card start */}
        <div className="md:ml-12 ml-20">
          <img
            className="w-64 h-64 mt-8  rounded-xl "
            src="https://www.nobroker.in/blog/wp-content/uploads/2022/07/showcase-design-for-hall.jpg"
            alt=""
          />

          <p className="text-white text-xs">08.08.2021</p>
          <p className="text-white ">
            LEARN HOW TO OVERCOME <br /> ADVERSITY
          </p>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Aliquid, numquam.
          </p>
        </div>
        {/* Third card end */}

        {/* Forth card start */}
        <div className="md:ml-12 ml-20">
          <img
            className="w-64 h-64 mt-8  rounded-xl "
            src="https://homezonline.in/wp-content/uploads/2022/07/Attractive-Small-home-design-.jpeg"
            alt=""
          />

          <p className="text-white text-xs">08.08.2021</p>
          <p className="text-white ">
            LEARN HOW TO OVERCOME <br /> ADVERSITY
          </p>
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Aliquid, numquam.
          </p>
        </div>
        {/* Forth card end */}

      </div>
    </div>
  );
}
