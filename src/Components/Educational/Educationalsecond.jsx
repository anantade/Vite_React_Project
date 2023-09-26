import React from 'react'

export default function Education() {
  return (
    <div className='bg-gray-900'>

      <div className=''>
          <p className='md:pl-[570px] pl-5 pt-10 text-white text-4xl'>Educational</p>
          <p className='md:pl-[420px] pl-5 pt-5 text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, saepe.</p>
      </div>

     
      
      {/* Academic Background */}
      <div className=" flex flex-wrap pt-10">
         <div>
            <img className='w-96 h-88 rounded-xl md:ml-28 ml-5 ' src="https://www.ielts-mentor.com/images/writingsamples/ielts-graph-266-female-unemployment-uk.png" alt="" />
         </div>

         <div className='md:ml-72 ml-10'>
            <p className='text-white text-xs'>Un-employment</p>
            <p className='text-white text-2xl'>One of the top social <br />issue of world and India </p><br />

            <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Iure quidem aliquam optio magni. Amet, porro tenetur<br /> labore vel illum commodi perferendis doloribus aspernatur<br /> mollitia accusamus quaerat optio ut, maiores earum molestiae <br />est cupiditate, provident incidunt cumque praesentium voluptates?<br /> Dolores ducimus rerum vero veniam asperiores aut repellat tenetur<br /> saepe! Accusantium, debitis.</p>

         </div>
      </div>

      {/* Professional Background */}
      <div className=" flex flex-wrap pt-10">
     
         <div className='md:ml-44 ml-10 pt-28'>
            <p className='text-white text-xs'>Problem Justification with data</p>
            <p className='text-white text-2xl'>Present data</p><br />

            <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Iure quidem aliquam optio magni. Amet, porro tenetur<br /> labore vel illum commodi perferendis doloribus aspernatur<br /> mollitia accusamus quaerat optio ut, maiores earum molestiae <br />est cupiditate, provident incidunt cumque praesentium voluptates?<br /> Dolores ducimus rerum vero veniam asperiores aut repellat tenetur<br /> saepe! Accusantium, debitis.</p>

         </div>

         <div className='pt-10 '>
            <img className='md:w-96 md:h-96 w-96 h-72 md:ml-64  rounded-xl ml-3 ' src="https://eltecenglish.files.wordpress.com/2017/10/screen-shot-2017-10-28-at-3-17-54-pm.png?w=1300" alt="" />
         </div>

      </div>

      {/* Professional background end */}

      <div>
        <p className='text-white text-4xl md:pl-96 pl-5 pt-10'>Why Instutations / University should <br /> <p className='md:pl-36'>Promote this project</p> </p>

        <p className='text-gray-400 text-sm md:pl-96 pl-5 pt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,    itaque maxime error officia esse <br /> <p className='md:pl-48'>inventore quod vitae odit ipsum rerum.</p></p>
      </div>
        

        <div className="md:flex flex-wrap  hidden bg-gray-800 rounded-2xl mt-5 ml-36 mr-36 p-3">
          <p className='text-white text-xl pl-10 '>Students</p>
          <p className='text-white text-xl pl-[20%] '>Students</p>
          <p className='text-white text-xl pl-[20%] '>Students</p>
          <p className='text-white text-xl pl-[20%] '>Students</p>
        </div>
    </div>
  )
}
