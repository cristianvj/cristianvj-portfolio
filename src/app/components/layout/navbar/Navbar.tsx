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
  const [showLanguages, setShowLanguages] = useState(false);

  const path = usePathname();

  return (
    <nav 
      className={`fixed z-10 w-full bg-white border-gray-200 ${darkMode === true && "dark:bg-gray-900"}`}
    >
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:container mx-auto py-4 px-10">
        <Link href="/" className="flex items-center">
          <Image 
            src="/favicon.ico" 
            className="h-55 w-55 mr-3" 
            alt="Flowbite Logo" 
            width={50} 
            height={50}
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
          className={`
            lg:hidden 
            inline-flex 
            items-center 
            p-1 
            ml-3 
            text-md 
            text-gray-500 
            rounded-lg  
            hover:bg-gray-100 
            focus:outline-none
            ring-2 
            ring-gray-500 
            focus:ring-2 
            focus:ring-gray-200 
            ${darkMode === true && "dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-gray-400"}
          `} 
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
            lg:w-auto
            lg:flex
            lg:flex-row
            lg:gap-4
          `} 
          id="navbar-default">

          <ul
            className={`
            font-medium 
            flex 
            flex-col 
            p-4 
            lg:p-0 
            mt-4 
            border 
            border-gray-100 
            rounded-lg 
            bg-gray-50 
            lg:flex-row 
            lg:space-x-8 
            lg:mt-0 
            lg:border-0 
            lg:bg-white
            ${darkMode === true && "dark:border-gray-700 dark:bg-gray-800 lg:dark:bg-gray-900 "}`}
          >
            <li className='lg:m-auto'>
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
            <li className='lg:m-auto'>
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
            <li className='lg:m-auto'>
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

          <div className='mt-2 lg:mt-0 lg:ml-4 flex flex-nowrap justify-center'>
            <a 
              target="_blank"
              href="https://github.com/cristianvj" 
              data-tooltip-target="tooltip-github-2" 
              className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark}`}
              onClick={() => setShowresponsiveMenu(!showResponsiveMenu)}
            >
              <svg className="w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d={iconPaths.gitHub}></path></svg>
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

            <div className="relative inline-block text-left">
              <button 
                type="button" 
                data-dropdown-toggle="language-dropdown-menu" 
                className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark} items-center hover:text-orange-600`}
                onClick={() => setShowLanguages(!showLanguages)}
              >
                <svg aria-hidden="true" className="h-6 w-6 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d={iconPaths.us} transform="scale(3.9385)"/></g></svg> English
              </button>
                {/* !-- Dropdown --> */}

                <div className={`z-50 ${!showLanguages && "hidden"} absolute my-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                  <ul className="py-2 font-medium" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div className="inline-flex items-center">
                          <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/><path fill="#fff" d={iconPaths.us} transform="scale(3.9385)"/></g></svg>              
                          English
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div className="inline-flex items-center">
                          <svg className="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"/><path fill="#009246" d="M0 0h170.7v512H0z"/><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/></g></svg>              
                          Español
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>

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