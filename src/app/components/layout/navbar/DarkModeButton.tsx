import { classes, iconPaths } from '@/utils/consts';
import React, { FC } from 'react'

interface props {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const DarkModeButton: FC<props> = ({ darkMode, setDarkMode }) => {
    
    if(darkMode) {
      return (
        <p 
          className={`
            ${classes.navbarIcons.light} 
            ${darkMode && classes.navbarIcons.dark}
          `}
          onClick={() => setDarkMode(!darkMode)}
        >
          <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths.sun}></path>
          </svg>
          <span className="sr-only">Active light mode</span>
        </p>
      )
    } else {
      return (
        <p 
          className={`
            ${classes.navbarIcons.light}
            ${darkMode && classes.navbarIcons.dark}
          `}
          onClick={() => setDarkMode(!darkMode)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths.moon}></path>
          </svg>
          <span className="sr-only">Active dark mode</span>
        </p>
      )
    }
}

export default DarkModeButton