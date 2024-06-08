'use client';

import React, { FC } from 'react'

import { classes } from '@/utils/consts';
import { Link } from '../../../navigation';
import { useLocale } from 'next-intl';

import EnSvg from './EnSvg';
import EsSvg from './EsSvg';

interface props {
  darkMode: boolean | undefined;
  showLanguages: boolean;
  setShowLanguages: (showLanguages: boolean) => void;
}

const LanguageButton: FC<props> = ({darkMode, showLanguages, setShowLanguages}) => {
  const currentLocale = useLocale();
  
  return (
    <div className="relative inline-block text-left">
      <button 
        type="button" 
        data-dropdown-toggle="language-dropdown-menu" 
        className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark} items-center hover:text-orange-600 gap-2`}
        onClick={() => setShowLanguages(!showLanguages)}
      >
        {
          currentLocale === "en" ? <EnSvg /> : <EsSvg />
        }
      </button>

        {/* !-- Dropdown --> */}

        <div className={`z-50 ${!showLanguages && "hidden"} absolute my-2 text-gray-500 list-none bg-white divide-y divide-gray-100 rounded-lg shadow left-[-18px] lg:left-0 ${darkMode && "dark:bg-gray-700 "}`}>
          <ul className="py-2 font-medium" role="none">

            <li>
              {
                currentLocale === "es" ? (
                  <Link href="/" locale="en" className={`${darkMode ? classes.languageItemDark : classes.languageItem}`} role="menuitem">
                    <div className="inline-flex items-center gap-2">
                      <EnSvg />
                    </div>
                  </Link> )
                : (
                  <Link href="/" locale="es" className={`${darkMode ? classes.languageItemDark : classes.languageItem}`} role="menuitem">
                    <div className="inline-flex items-center gap-2">
                      <EsSvg />
                    </div>
                  </Link>
                )
            }
            </li>
          </ul>
        </div>
    </div>
  )
}

export default LanguageButton