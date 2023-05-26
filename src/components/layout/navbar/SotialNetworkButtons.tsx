import React, { FC } from 'react'

import { classes, iconPaths } from '@/utils/consts';

interface props {
  darkMode: boolean;
  showResponsiveMenu: boolean;
  setShowresponsiveMenu: (showResponsiveMenu: boolean) => any;
}

const SotialNetworkButtons:FC<props> = ({darkMode, setShowresponsiveMenu, showResponsiveMenu}) => {
  return (
    <>
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
    </>
  )
}

export default SotialNetworkButtons