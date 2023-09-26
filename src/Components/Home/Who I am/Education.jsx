import React from 'react'

export default function Education() {
  return (
    <div className='bg-gray-900'>

      <div className=''>
          <p className='md:pl-[570px] pl-5 pt-10 text-white text-4xl'>Education</p>
          <p className='md:pl-[420px] pl-5 pt-5 text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, saepe.</p>
      </div>

      {/* <div className=" flex flex-wrap pt-24">

         <div className='w-14 h-14 bg-green-800 absolute z-40 ml-5 mt-7 '>

         </div>

         <div className='w-14 h-14 bg-yellow-800 absolute  z-10 '>

         </div>
      </div> */}
      
      {/* Academic Background */}
      <div className=" flex flex-wrap pt-10">
         <div>
            <img className='w-84 h-84 rounded-xl md:ml-28 ml-5 ' src="https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12979.jpg?w=360" alt="" />
         </div>

         <div className='md:ml-72 ml-10'>
            <p className='text-white text-xs'>Academic</p>
            <p className='text-white text-2xl'>The Academic <br />Excellence</p><br />

            <ul className='list-disc'>
                <li className='text-white text-sm'>PhD in Management</li> <br />  
                <li className='text-white text-sm'>B.Tech Electronics</li>  <br /> 
                <li className='text-white text-sm'>MBA in Operations and Project MGMT</li><br />  
                <li className='text-white text-sm'>Graduate in Account and Finance</li><br />   
                <li className='text-white text-sm'>3 yr. diploma in Electronics</li>   
            </ul>
         </div>
      </div>

      {/* Professional Background */}
      <div className=" flex flex-wrap pt-10">
     
         <div className='md:ml-44 ml-10'>
            <p className='text-white text-xs'>Professional</p>
            <p className='text-white text-2xl'>The Professional is <br />focused on the future</p><br />

            <ul className='list-disc'>
                <li className='text-white text-sm'>Certified - ITIL</li> <br />  
                <li className='text-white text-sm'>Certified auditor - VDA 6.3</li>  <br /> 
                <li className='text-white text-sm'>LEAN certified</li><br />  
                <li className='text-white text-sm'>Six sigma black belt</li><br />   
                <li className='text-white text-sm'>Certified auditor - iso 9001</li> <br />   
                <li className='text-white text-sm'>Certified auditor - iso 14001</li>  <br />  
                <li className='text-white text-sm'>Certified auditor - Ts 16949</li>  <br />  
                <li className='text-white text-sm'>Certified auditor - Ts OHSAS</li>   
            </ul>
         </div>

         <div className='pt-10 '>
            <img className='md:w-96 md:h-96 w-96 h-72 md:ml-64  rounded-xl ml-3 ' src="https://media.gettyimages.com/id/530281625/photo/confident-businessman-in-office.jpg?s=612x612&w=gi&k=20&c=SAtBXSarvog6Nw3MNo1InZX8Er2kjT1-6vtnGSkE0Ds=" alt="" />
         </div>

      </div>


        {/* Experince */}
      <div className=" flex flex-wrap pt-10 pb-5 bg-gray-800">
         <div>
            <img className='w-72 h-72 rounded-full md:ml-28 ml-10 ' src="https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg" alt="" />
         </div>

         <div className='md:ml-72 ml-10'>
           
            <p className='text-white text-2xl'>Experince</p><br />

            <p className='text-white text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Placeat facilis laboriosam possimus aliquam ducimus enim <br /> modi, itaque exercitationem quibusdam rem dicta beatae <br /> ullam. Recusandae dolores doloremque cumque dicta <br /> omnis, doloribus, placeat esse ex voluptatibus laudantium<br /> voluptatum deserunt suscipit deleniti perspiciatis aliquid <br /> rem neque vitae dignissimos! Eos quos facilis impedit magnam!
            </p>

            <p className='text-white text-sm pt-5'>Felicia Marci</p>
            <p className='text-white text-xs'>JABIL CEO</p>
         </div>
      </div>
        
    </div>
  )
}
