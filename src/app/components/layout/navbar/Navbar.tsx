"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Pacifico } from 'next/font/google';
import { classes, iconPaths } from '@/utils/consts';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showResponsiveMenu, setShowresponsiveMenu] = useState(false);

  const path = usePathname();
  console.log(path)

  return (
    <nav 
      className={`fixed z-10 w-full bg-white border-gray-200 ${darkMode === true && "dark:bg-gray-900"}`}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:container mx-auto py-4 px-10">
        <Link href="/" className="flex items-center">
          <Image 
            src="/favicon.ico" 
            className="h-8 mr-3" 
            alt="Flowbite Logo" 
            width={40} 
            height={40}
          />
          <span className={`
            self-center 
            text-3xl 
            font-normal
            whitespace-nowrap
            text-orange-600
            title-shadow
            ${pacifico.className}
          `}>
            Cristian VJ
          </span>
        </Link>

        <button 
          data-collapse-toggle="navbar-default" 
          type="button" 
          className={`md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${darkMode === true && "dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-gray-400"}`} 
          aria-controls="navbar-default" 
          aria-expanded="false"
          onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg 
            className="w-6 h-6" 
            aria-hidden="true" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"
            >
            </path>
          </svg>
        </button>


        <div 
          className={`
            ${showResponsiveMenu ? "show" : "hidden"} 
            w-full
            md:w-auto
            md:flex
            md:flex-row
            md:gap-4
          `} 
          id="navbar-default">

          <ul
            className={`
            font-medium 
            flex 
            flex-col 
            p-4 
            md:p-0 
            mt-4 
            border 
            border-gray-100 
            rounded-lg 
            bg-gray-50 
            md:flex-row 
            md:space-x-8 
            md:mt-0 
            md:border-0 
            md:bg-white
            ${darkMode === true && "dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900 "}`}
          >
            <li className='md:m-auto'>
              <Link 
                href="/" 
                className={`
                  ${path === "/" && classes.navbarLi.active} 
                  ${classes.navbarLi.link} 
                  ${darkMode === true && classes.navbarLi.linkDark}
                `}
                onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
              >
                Home
              </Link>
            </li>
            <li className='md:m-auto'>
              <Link 
                href="/blog" 
                className={`
                  ${
                    (path === "/blog" || path.split("/")[1] === "blog") 
                      && classes.navbarLi.active
                  } 
                  ${classes.navbarLi.link} 
                  ${darkMode === true && classes.navbarLi.linkDark}
                `}
                onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
              >
                Blog
              </Link>
            </li>
            <li className='md:m-auto'>
              <Link 
                href="/interview" 
                className={`
                  ${path === "/interview" && classes.navbarLi.active} 
                  ${classes.navbarLi.link} 
                  ${darkMode === true && classes.navbarLi.linkDark}
                `}
                onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
              >
                Interview Prep
              </Link>
            </li>
          </ul>

          <div className='mt-2 md:mt-0 md:ml-4 flex flex-nowrap justify-center'>
            <a 
              target="_blank"
              href="https://github.com/cristianvj" 
              data-tooltip-target="tooltip-github-2" 
              className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
              onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
            >
              <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d={iconPaths.gitHub}></path></svg>
              <span className="sr-only">View on Github</span>
            </a>

            <a 
              target="_blank"
              href="https://www.youtube.com/channel/UCEkTnONRiFQPlPfLd0XEIaQ" 
              data-tooltip-target="tooltip-youtube" 
              className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
              onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
            >
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d={iconPaths.youTube}></path></svg>
              <span className="sr-only">Flowbite YouTube</span>
            </a>

            <a 
              target="_blank"
              href="https://www.linkedin.com/in/cristianvj/" 
              data-tooltip-target="tooltip-linkedin" 
              className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
              onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
            >
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d={iconPaths.linkedin}></path></svg>
              <span className="sr-only">Flowbite LinkedIn</span>
            </a>

            {
              darkMode 
              ? (
                <p data-tooltip-target="tooltip-sun" className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
                onClick={() => setDarkMode(!darkMode)}>
                  <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths.sun}></path>
                  </svg>
                    <span className="sr-only">Active light mode</span>
                  </p>
              )
              : (
                <p 
                className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths.moon}></path>
                  </svg>
                  <span className="sr-only">Active dark mode</span>
                </p>
              )
            }

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar