import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
function Home() {
  return (
    <div name='Home' className='w-full h-[133vh] bg-[#0a192f]'>
        {/* container */}
        <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> <span className='text-gray-300 hover:text-pink-600'>Midhun</span> Surendran</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>i'm a Self taught Front-End Developer. </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-xl'>Self taught Front-End Developer in developing standards-compliant, responsive & mobile-first web-Applications. Fast learner getting things done quickly, reliably, and elegantly, integrating projects across teams efficiently and a result oriented team player with good communication.</p>
            <div>
                <button className=' group text-white border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View More
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home