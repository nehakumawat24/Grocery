import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation()
  const [showMenu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(!showMenu)

  // ✅ helper function (IMPORTANT)
  const isActive = (path) => location.pathname === path

  return (
    <header className='bg-white fixed top-0 left-0 right-0 shadow z-10'>
      <nav className='max-w-6xl md:h-[15vh] h-[12vh] px-10 mx-auto flex justify-between items-center'>

        {/* Logo */}
        <a className='font-bold text-3xl' href="/">
          Gr<span className='text-orange-500 uppercase'>o</span>cery
        </a>

        {/* Desktop Nav */}
        <ul className='md:flex items-center gap-15 hidden'>

          <li>
            <Link 
              to='/' 
              className={`transition hover:text-orange-500 hover:font-semibold hover:scale-105 ${
                isActive('/') ? 'text-orange-500 font-bold scale-102' : ''
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              to='/about' 
              className={`transition hover:text-orange-500 hover:font-semibold hover:scale-105 ${
                isActive('/about') ? 'text-orange-500 font-bold scale-102' : ''
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link 
              to='/processpage' 
              className={`transition hover:text-orange-500 hover:font-semibold hover:scale-105 ${
                isActive('/processpage') ? 'text-orange-500 font-bold scale-102' : ''
              }`}
            >
              Process
            </Link>
          </li>

          <li>
            <Link 
              to='/contact' 
              className={`transition hover:text-orange-500 hover:font-semibold hover:scale-105 ${
                isActive('/contact') ? 'text-orange-500 font-bold scale-102' : ''
              }`}
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-5">

          <div className='md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden'>
            <input type="text" placeholder='Search...' className='flex-1 px-3 h-[5vh] focus:outline-none' />
            <button className='bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-xl'>
              <IoSearch />
            </button>
          </div>

          <FaHeart className='text-2xl' />
          <HiShoppingBag className='text-2xl' />

          {/* Mobile Menu */}
          <button className='text-2xl md:hidden' onClick={toggleMenu}>
            {showMenu ? <RxCross2 /> : <TbMenu2 />}
          </button>

        </div>

      </nav>
    </header>
  )
}

export default Navbar