"use client";

import React, { FC, useState } from 'react'

interface props {
  logged: boolean;
  darkMode: boolean;
}

const LoginButon: FC<props> = ({ logged, darkMode }) => {
  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {
        logged ? (
          <div className="relative lg:ml-3 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-orange-600 rounded-full dark:bg-orange-600" onClick={()=>setShowLogin(!showLogin)}>
              <span className={`font-medium text-gray-100 ${darkMode && "dark:text-gray-300"}`}>CV</span>
          </div>    
        ) : (
          <div 
            className={`
              relative lg:ml-3 inline-block 
              w-10 h-10 
              overflow-hidden 
              bg-gray-100 
              rounded-full 
              ${darkMode && "dark:bg-gray-600"}
            `} 
            onClick={()=>setShowLogin(!showLogin)}
          >
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
        )
      }
      {/* <!-- Dropdown menu --> */}

      {
        showLogin && (
          <div id="userDropdown" className={`z-10 absolute mt-[7rem] lg:mt-12 lg:ml-[290px] bg-white divide-y divide-gray-100 rounded-lg shadow mw-44 text-center  ${darkMode && "dark:bg-gray-700 dark:divide-gray-600"}`}>
            {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div className="font-medium truncate">name@flowbite.com</div>
            </div> */}
            <ul className={`py-2 text-sm text-gray-700 ${darkMode &&"dark:text-gray-200"}`}aria-labelledby="avatarButton">
              <li onClick={()=>setShowLogin(!showLogin)}>
                <a href="#" className={`block px-4 py-2  hover:bg-gray-200 ${darkMode && "dark:hover:bg-gray-600 dark:hover:text-orange-600"}`}>Log In</a>
              </li>
              <li onClick={()=>setShowLogin(!showLogin)}>
              <a href="#" className={`block px-4 py-2 hover:bg-gray-200 ${darkMode && "dark:hover:bg-gray-600 dark:hover:text-orange-600"}`}>Register</a>
              </li>
              {/* <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li> */}
            </ul>
            {/* <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div> */}
          </div>
        )
      }
    </>
  )
}

export default LoginButon