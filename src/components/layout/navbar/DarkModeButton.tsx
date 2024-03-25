import React, { FC } from 'react';
import { classes, iconPaths } from '@/utils/consts';
import { useDarkContext } from '../../../context/darkMode.context';

interface DarkModeButtonProps {
  setShowResponsiveMenu: (value: boolean) => void;
}

const DarkModeButton: FC<DarkModeButtonProps> = ({ setShowResponsiveMenu }) => {
  const { darkMode, setDarkMode } = useDarkContext() || {};

  const handleClick = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
      setShowResponsiveMenu(false);
    }
  };

  return (
    <p
      className={`
        ${classes.navbarIcons.light} 
        ${darkMode && classes.navbarIcons.dark}
      `}
      onClick={handleClick}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={darkMode ? iconPaths.sun : iconPaths.moon} />
      </svg>
      <span className="sr-only">{darkMode ? 'Active light mode' : 'Active dark mode'}</span>
    </p>
  );
};

export default DarkModeButton;
