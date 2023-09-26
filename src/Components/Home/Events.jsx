import React from "react";

export default function Events() {
  return (
    <div>
      <div className='bg-[url("https://wallpaperaccess.com/full/2489838.jpg")] hidden md:block bg-center bg-cover h-[500px] w-[1348px] '>
        <div className="bg-black/75 relative  h-[500px] w-[1348px]">
          <p className="text-center text-white pt-12 text-[35px] font-bold">
            Upcoming Events
          </p>
          <p className="text-white text-center text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            distinctio saepe necessitatibus iusto similique cum iure atque
            impedit obcaecati autem.
          </p>

          {/* First row start */}
          <div className="flex mt-5 ml-20 items-center">
            <p className="text-white text-[25px] font-bold">21 Apr</p>
            <p className="text-white text-[15px] ml-28 font-bold">
              Arizona , US
            </p>
            <p className="text-white text-[15px] ml-72 ">Drone Rathore</p>
            <p className="text-white text-[15px] ml-20 bg-gray-800  rounded-3xl w-20 h-6 text-center">
              Sold Out
            </p>
            <p className="text-white text-[15px] ml-44 ">BUY TICKETS</p>
          </div>
          <hr />
          {/* First row end */}

          {/* second row start */}
          <div className="flex mt-5 ml-20 items-center">
            <p className="text-white text-[25px] font-bold">19 May</p>
            <p className="text-white text-[15px] ml-[105px] font-bold">
              Delhi , Bharat
            </p>
            <p className="text-white text-[15px] ml-[277px] ">Drone Rathore</p>
            <p className="text-white text-[15px] ml-20 bg-gray-800  rounded-3xl w-20 h-6 text-center">
              Sold Out
            </p>
            <p className="text-white text-[15px] ml-44 ">BUY TICKETS</p>
          </div>
          <hr />
          {/* second row end */}

          {/* Third row start */}
          <div className="flex mt-5 ml-20 items-center">
            <p className="text-white text-[25px] font-bold">08 Jun</p>
            <p className="text-white text-[15px] ml-28 font-bold">
              North Carolina , US
            </p>
            <p className="text-white text-[15px] ml-[242px] ">Drone Rathore</p>
            <p className="text-white text-[15px] ml-20 bg-gray-800  rounded-3xl w-20 h-6 text-center">
              Sold Out
            </p>
            <p className="text-white text-[15px] ml-44 ">BUY TICKETS</p>
          </div>
          <hr />
          {/* Third row end */}

          {/* Forth row start */}
          <div className="flex mt-5 ml-20 items-center">
            <p className="text-white text-[25px] font-bold">11 July</p>
            <p className="text-white text-[15px] ml-28 font-bold">
              London , UK
            </p>
            <p className="text-white text-[15px] ml-72 ">Drone Rathore</p>
            <p className="text-white text-[15px] ml-20 bg-gray-800  rounded-3xl w-20 h-6 text-center">
              Sold Out
            </p>
            <p className="text-white text-[15px] ml-44 ">BUY TICKETS</p>
          </div>
          <hr />
          {/* Forth row end */}

          {/* Fifth row start */}
          <div className="flex mt-5 ml-20 items-center">
            <p className="text-white text-[25px] font-bold">15 Aug</p>
            <p className="text-white text-[15px] ml-28 font-bold">
              Mumbai , India
            </p>
            <p className="text-white text-[15px] ml-[269px] ">Drone Rathore</p>
            <p className="text-white text-[15px] ml-20 bg-gray-800  rounded-3xl w-20 h-6 text-center">
              Sold Out
            </p>
            <p className="text-white text-[15px] ml-44 ">BUY TICKETS</p>
          </div>
          <hr />
          {/* Fifth row end */}
        </div>
      </div>
    </div>
  );
}
