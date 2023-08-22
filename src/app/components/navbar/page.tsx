'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../img/Logo.png'

export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-transparent w-full'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8'>
        <a href='/' className='flex items-center hover:transform hover:scale-110 transition duration-150'>
          <Image
            src={logo}
            className='h-50 mr-3 shadow-lg rounded-lg hover:shadow-light-purple'
            alt='Logo'
            width={100}
            height={100}
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white' />
        </a>
        {/* Mobile menu toggle */}
        <div className='md:hidden'>
          <button
            type='button'
            onClick={toggleMenu}
            className='text-gray-500 dark:text-white hover:bg-light-purple dark:hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-light-purple dark:focus:ring-light-purple rounded-lg text-sm p-2.5 mr-1'
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
            <span className='sr-only'>Open main menu</span>
          </button>
        </div>
        {/* Desktop menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 text-base font-sans font-medium border border-none rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-none'>
            <li>
              <a
                href='#about'
                className='block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light-purple md:p-0 md:dark:hover:text-light-purple dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:transform hover:scale-110 transition duration-150'
                aria-current='page'
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light-purple md:p-0 md:dark:hover:text-light-purple dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:transform hover:scale-110 transition duration-150'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light-purple md:p-0 dark:text-white md:dark:hover:light-purple dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:transform hover:scale-110 transition duration-150'
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
