import { classes } from '@/utils/consts';
import Link from 'next/link';
import React, { FC } from 'react'

interface props {
  pages: {name: string; href: string}[];
  path: string;
  darkMode: boolean | undefined;
  showResponsiveMenu: boolean;
  setShowResponsiveMenu: (showResponsiveMenu: boolean) => void;
}

const MenuPages: FC<props> = ({ pages, path,  darkMode, setShowResponsiveMenu, showResponsiveMenu }) => {

  return (
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
      ${darkMode === true && "dark:border-gray-700 dark:bg-gray-800 lg:dark:bg-gray-800 "}`}
    >
      {
        pages.map((page, id) => (
          <li key={id} className='lg:m-auto'>
            <Link 
              href={page.href} 
              className={`
                ${path === page.href && classes.navbarLi.active} 
                ${(page.href === "/blog" && path.includes('/blog')) && classes.navbarLi.active}
                ${classes.navbarLi.link} 
                ${darkMode === true && path !== page.href && classes.navbarLi.linkDark}
              `}
              onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
            >
              {page.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default MenuPages