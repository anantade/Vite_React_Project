import React from 'react'

export default function Hilight() {
  return (
    <div>
      <div className='bg-gray-900 pb-5'>

        {/* Student and their parents */}
      <div className=" flex flex-wrap pt-10">
         <div>
            <img className='w-96 h-88 rounded-xl md:ml-28 ml-5 ' src="https://image.cnbcfm.com/api/v1/image/107230302-1682386035093-gettyimages-1409520341-img_0309photo.jpeg?v=1683475201" alt="" />
         </div>

         <div className='md:ml-72 ml-10'>
            <p className='text-white text-lg'>Student and Their Parents</p><br />

        <ul className='text-white list-disc text-sm'>
            <li>Monetary Benefit - Financial</li><br />
            <li>More success Ratio of student  - Brand value , Rating</li><br />
            <li>More admission - Financial</li><br />
            <li>Link Between University and industries - Financial</li>
        </ul>

         </div>
      </div>

      {/* HighLights*/}
      <div className=" flex flex-wrap pt-10">
     
         <div className='md:ml-44 ml-10 pt-28'>
            <p className='text-white text-xs'>Highlight</p>
            <p className='text-white text-2xl'>Key Highlights of <br />Brochure</p><br />

           <div>
              <p className='text-gray-400 text-sm'>Problem un-employment</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Problem justification with data</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Analysis of data and problem</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Actual problem identification</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Root causes analysis</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Implementation - Light house project</p>
              <hr />

              <p className='text-gray-400 text-sm pt-2'>Horizontal development</p>
              <hr />
           </div>

         </div>

         <div className='pt-10 '>
            <img className='md:w-96 md:h-96 w-96 h-72 md:ml-64  rounded-xl ml-3 ' src="https://m.media-amazon.com/images/I/6167dpf38wL.jpg" alt="" />
         </div>

      </div>
      </div>
    </div>
  )
}
