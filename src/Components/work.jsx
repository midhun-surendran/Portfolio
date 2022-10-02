import React from 'react'
import hoobankk from '../Assets/hoobankk.png'
import WeatherApp from '../Assets/WeatherApp.png'
import momemtum from '../Assets/momemtum.png'
function Work() {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className=' py-6 text-xl'>Check out some of my recent work</p>
            </div>
            {/* container for work */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* grid item */}

                {/* first card */}
                <div style={{backgroundImage:`url(${WeatherApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center content-div '>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           weather application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://weather-feed.netlify.app/"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Project link</button></a>
                            <a href="https://lnkd.in/dUgsfZjd"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div style={{backgroundImage:`url(${hoobankk})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center content-div '>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            mordern landing page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://hoobank.herokuapp.com"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Project link</button></a>
                            <a href="https://github.com/midhun-surendran/Hoobank_Landing-page"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                {/* third card */}
                <div style={{backgroundImage:`url(${momemtum})`}} className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center content-div '>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            momemtum clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://momemtum-clone-5359.netlify.app/"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Project link</button></a>
                            <a href="https://lnkd.in/d7MyvkjR"><button className = 'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work