import React,{useState} from 'react'
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
function Navbar() {
    const[nav,setNav]=useState(false)

    const handleClick = ()=>{
        setNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h1 className='font-bold text-2xl text-gray-300 hover:text-pink-600'>MIDHUN SURENDRAN</h1>
        </div>

        {/* navigation menu */}

            <ul className='hidden md:flex'>
                 <Link to="Home" smooth={true} offset={50} duration={500} >
                    <li className='text-2xl text-gray-300 hover:text-pink-600'>Home</li>
                 </Link>

                 <Link to="About" smooth={true} offset={50} duration={500} >
                 <li className='text-2xl text-gray-300 hover:text-pink-600'>About</li>
                 </Link>

                 <Link to="Skills" smooth={true} offset={50} duration={500} >
                 <li className='text-2xl text-gray-300 hover:text-pink-600'>Skills</li>
                 </Link>

                 <Link to="Work" smooth={true} offset={50} duration={500} >
                 <li className='text-2xl text-gray-300 hover:text-pink-600'>Work</li>
                 </Link>

                 <Link to="Contact" smooth={true} offset={50} duration={500} >
                 <li className='text-2xl text-gray-300 hover:text-pink-600'>Contact</li>
                 </Link>

            </ul>


        {/* hamburger menu */}

        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars />: <FaTimes/>}
        </div>

        {/* mobile menu */}

            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                 <Link onClick={handleClick} to="Home" smooth={true} offset={50} duration={500} >
                 <li className='py-6 text-4xl'>Home</li>
                 </Link>

                 <Link onClick={handleClick} to="About" smooth={true} offset={50} duration={500} >
                 <li className='py-6 text-4xl'>About</li>
                 </Link>

                 <Link onClick={handleClick} to="Skills" smooth={true} offset={50} duration={500} >
                 <li  className='py-6 text-4xl'>Skills</li>
                 </Link>

                 <Link onClick={handleClick} to="Work" smooth={true} offset={50} duration={500} >
                 <li className='py-6 text-4xl'>Work</li>
                 </Link>

                 <Link onClick={handleClick} to="Contact" smooth={true} offset={50} duration={500} >
                 <li className='py-6 text-4xl'>Contact</li>
                 </Link>

            </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                    <a className='flex justify-between items-center w-full text-gray-300  text-xl' href="/">
                        Linkdin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                    <a className='flex justify-between items-center w-full text-gray-300  text-xl' href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' >
                    <a className='flex justify-between items-center w-full text-gray-300  text-xl' href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                    <a className='flex justify-between items-center w-full text-gray-300  text-xl' href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar