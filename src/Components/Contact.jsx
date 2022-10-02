import React from 'react'

function Contact() {
  return (
    <div name ='Contact' className='w-full h-[133vh] bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5b0befe9-1472-4f82-961d-ac8aa4619678"  className='flex flex-col max-w-[600px] w-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 p-4 text-xl'>Submit the form below or shoot me an Email at - midhunsurendran4558@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" id=""  rows="10" placeholder='Message'></textarea>
            <button className='text-white rounded-md border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center '>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact