import React from 'react'

function About() {
  return (
    <div name='About' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
                <div className='sm:text-right text-2xl sm:text-4xl font-bold'>
                    <p>Hi,I'm Midhun,nice to meet you .Please take a look around.</p>
                </div>
                <div>
                    <p className='text-xl'>I'm Passionate about developing excellent Front-End solutions tht improves the lives of those who around me.I specilize in creating  Front-End solutions  for clients ranging from individuls and small businesses all the way to large enterprise corporations.What would you do if you had a  Front-End solutions expert avaliable at your finger tips...   </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About