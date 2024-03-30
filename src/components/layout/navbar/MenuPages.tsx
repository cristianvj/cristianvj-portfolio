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
      border-slate-100 
      rounded-lg 
      lg:flex-row 
      lg:space-x-8 
      lg:mt-0 
      lg:border-0
      ${darkMode ? "border-slate-600 bg-slate-700 lg:bg-slate-800 " : "border-slate-300 bg-slate-100 lg:bg-slate-300 "}`}
    >
      {
        pages.map((page, id) => (
          <li key={id} className='lg:m-auto'>
            <Link 
              href={page.href} 
              className={`
                ${path.split('/')[1] === page.href.split('/')[1] 
                  ? darkMode 
                    ? classes.navbarLi.activeDark
                    : classes.navbarLi.active
                  : darkMode 
                    ? classes.navbarLi.linkDark 
                    : classes.navbarLi.link
                }
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