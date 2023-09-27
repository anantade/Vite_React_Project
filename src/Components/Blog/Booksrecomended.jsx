import React from 'react'

export default function Booksrecomended() {
  return (
    <div>
      <div className='bg-gray-900'>

        <div>
            <p className='text-white text-2xl pt-10 pl-16'>Recommended Books</p>
            <p className='text-gray-400 text-xs pt-2 pl-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni laborum eligendi explicabo quos deserunt reiciendis minus delectus minima aliquam perferendis.</p>
        </div>

        <div className="flex flex-wrap pt-5">

            {/* first book */}
           <div className='ml-16'>
             <img className='w-72 h-64 rounded-xl ' src="https://m.media-amazon.com/images/I/81dHIyhJW+L._AC_UF350,350_QL80_.jpg" alt="" />
             <p className='text-white pl-1'>You Can</p>
             <p className='text-white pl-1'>By Ranjat singh</p>
           </div>
           {/* first book end */}

            {/* Second book */}
            <div className='md:ml-36 ml-16'>
             <img className='w-72 h-64 rounded-xl ' src="https://m.media-amazon.com/images/I/812jeCCd4CL._AC_UF350,350_QL80_.jpg" alt="" />
             <p className='text-white pl-1'>You Can</p>
             <p className='text-white pl-1'>By Ranjat singh</p>
           </div>
           {/* Second book end */}

             {/* Third book */}
             <div className='md:ml-36 ml-16'>
             <img className='w-72 h-64 rounded-xl ' src="https://qph.cf2.quoracdn.net/main-qimg-b989c8443333ed9225b79a0221f1ba79" alt="" />
             <p className='text-white pl-1'>You Can</p>
             <p className='text-white pl-1'>By Ranjat singh</p>
           </div>
           {/* Third book end */}

        </div>
      </div>
    </div>
  )
}
