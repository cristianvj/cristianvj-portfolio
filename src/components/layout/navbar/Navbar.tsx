"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
//import Link from 'next/link';
import Image from 'next/image';

import { Pacifico } from 'next/font/google';
import LanguageButton from './LanguageButton';
import SotialNetworkButtons from './SotialNetworkButtons';
import DarkModeButton from './DarkModeButton';
import MenuPages from './MenuPages';
import LoginButon from './LoginButon';

import { useDarkContext } from '../../../context/darkMode.context';
import { Link } from '@/navigation';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [logged] = useState(false);

  const { darkMode } = useDarkContext() || {};

  const pages = [
    {href: "/", name:"Home"}, 
    {href: "/blog", name: "Blog"},
  ];
  //{href: "/interview", name: "Interview"}

  const path = usePathname();

  return (
    <nav 
      className={`
        fixed z-[100] 
        w-full
        border-b
        ${darkMode ? ' bg-slate-800 border-b-slate-600' : 'bg-slate-300 border-b-slate-400'}
      `}
    >
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:container mx-auto py-4 px-10">
        <Link href="/" className="flex items-center">
          <Image 
            src="/favicon.ico" 
            className="h-55 w-55 mr-3 pb-2" 
            alt="Flowbite Logo" 
            width={33} 
            height={33}
          />
          <span className={`
            self-center 
            text-2xl 
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
            ${darkMode && "hover:bg-gray-700 focus:ring-gray-600 text-gray-400"}
          `} 
          aria-controls="navbar-default" 
          aria-expanded="false"
          onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
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

          <MenuPages 
            pages={pages} 
            path={path}
            darkMode={darkMode}
            setShowResponsiveMenu={setShowResponsiveMenu}
            showResponsiveMenu={showResponsiveMenu}
          />

          <div className='mt-2 lg:mt-0 lg:ml-4 flex flex-wrap lg:flex-nowrap justify-center'>
            <SotialNetworkButtons 
              darkMode={darkMode} 
              setShowResponsiveMenu={setShowResponsiveMenu} 
              showResponsiveMenu={showResponsiveMenu}
            />
            <LanguageButton 
              darkMode={darkMode} 
              showLanguages={showLanguages} 
              setShowLanguages={setShowLanguages} 
            />
            <DarkModeButton setShowResponsiveMenu={setShowResponsiveMenu} />
           {/*  <LoginButon logged={logged} darkMode={darkMode} /> */}

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar