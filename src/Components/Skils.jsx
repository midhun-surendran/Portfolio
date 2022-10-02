import React from 'react'
import Html from '../Assets/html.png'
import Css from '../Assets/css.png'
import Javascript from '../Assets/javascript.png'
import reactimg from '../Assets/react.png'
import Github from '../Assets/github.png'
import Tailwind from '../Assets/tailwind.png'
function Skils() {
  return (
    <div name='Skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
         <div>
           <p className=' text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
           <p className='py-2 text-xl'>These are the technologies I've worked with</p>
         </div>
         <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Html} alt="html-logo" />
             <p className='my-4'>HTML</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Css} alt="html-logo" />
             <p className='my-4'>CSS</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Javascript} alt="html-logo" />
             <p className='my-4'>JAVASCRIPT</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={reactimg} alt="html-logo" />
             <p className='my-4'>REACT</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Github} alt="html-logo" />
             <p className='my-4'>GITHUB</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img className='w-20 mx-auto' src={Tailwind} alt="html-logo" />
             <p className='my-4'>TAILWIND</p>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Skils