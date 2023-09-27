import React from 'react'

export default function Eventshedule() {
  return (
    <div>
      <div className='bg-gray-900'>

        {/* upper part start */}
        <div className='flex flex-wrap'>

           <div>
              <p className='text-white text-2xl font-bold pt-5 pl-10'>Events Shedule</p>
              <p className='text-gray-400 text-xs font-bold pt-2 pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis ab voluptas eveniet rerum ex cum repellat <br /> praesentium adipisci assumenda vero?</p>
           </div>

           <div className='ml-[60%]'>
              <input className='w-32 h-5 bg-gray-700 mt-20 text-sm' type="text" placeholder='All files' />
           </div>
         </div> 
         {/* upper part end  */}

       {/* event table start */}

          <div className='mt-10 md:ml-52 pb-10 md:block hidden'>
            <table className='border-collapse border border-slate-500 '>
              <thead>
                <tr>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'></th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Monday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Tuesday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Wednesday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Thusday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Friday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Saturday</th>
                    <th className='border border-slate-600 text-white md:w-28 md:h-16 bg-gray-800'>Sunday</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <td className='border border-slate-700 text-white md:w-28 md:h-16 pl-2 text-sm '>08:00-10:00</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                    <td className='border border-slate-700 text-white md:w-28 md:h-16 pl-2 text-sm '>10:00-12:00</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm'>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                    <td className='border border-slate-700 text-white md:w-28 md:h-16 pl-2 text-sm '>14:00-16:00</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                    <td className='border border-slate-700 text-white md:w-28 md:h-16 pl-2 text-sm '>16:00-18:00</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 '></td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                    <td className='border border-slate-700 text-white md:w-28 md:h-16 pl-2 text-sm '>18:00-20:00</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm'>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm'>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm'>Lorem</td>
                    <td className='border border-slate-700 text-orange-600 md:w-28 md:h-16 pl-2 text-sm '>Lorem</td>
                </tr>
              </tbody>

            </table>
          </div>

      </div> 
    </div>
  )
}
