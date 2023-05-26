import React, { FC, useState } from 'react'

import { classes } from '@/utils/consts';

interface props {
  darkMode: boolean;
  showLanguages: boolean;
  setShowLanguages: (showLanguages: boolean) => void;
}

const LanguageButton: FC<props> = ({darkMode, showLanguages, setShowLanguages}) => {

  const [languageActive, setLanguageActive] = useState<"En" | "Es">("En")

  const EnSvg = () => (
    <>
      <svg 
        className="h-6 w-6 rounded-full mx-auto" 
        xmlns="http://www.w3.org/2000/svg" 
        data-name="01-United States" 
        viewBox="0 0 64 64" 
        id="united-states"
      >
        <path fill="#e9edf5" d="m12 27-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM23 27l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM34 27l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM17 17l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM28 17l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM34 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM23 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM12 7l-2 2 1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3zM1 54h62v5H1zM1 44h62v5H1zM63 35v4H1v-4h62zM37 25h26v5H37zM37 15h26v5H37zM37 5h26v5H37z"/>
        <path fill="#e21743" d="M1 59h62a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4ZM1 49h62v5H1zM1 39h62v5H1zM37 30h26v5H37zM37 20h26v5H37zM37 10h26v5H37zM63 5H37V1h22a4 4 0 0 1 4 4Z" />
        <path fill="#2a54c4" d="M19 1H5a4 4 0 0 0-4 4v30h36V1Zm-1 6 1-3 1 3h3l-2 2 1 3-3-2-3 2 1-3-2-2ZM7 7l1-3 1 3h3l-2 2 1 3-3-2-3 2 1-3-2-2Zm4 25-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2Zm-1-10 1-3-2-2h3l1-3 1 3h3l-2 2 1 3-3-2Zm12 10-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2Zm-1-10 1-3-2-2h3l1-3 1 3h3l-2 2 1 3-3-2Zm12 10-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2ZM32 9l1 3-3-2-3 2 1-3-2-2h3l1-3 1 3h3Z"/>
        <path fill="#dce1eb" d="M63 20v-3a22.161 22.161 0 0 1-.209 3Z" />
        <path fill="#bec3d2" d="m5 32 1.2-.8q-.339-.4-.661-.82Z" />
        <path fill="#dce1eb" d="M1 54h62v5H1zM1 44h62v5H1zM10.358 35H1v4h22a21.894 21.894 0 0 1-12.642-4zM41 39h22v-4h-9.358A21.894 21.894 0 0 1 41 39zm17.745-9H63v-5h-1.507a21.9 21.9 0 0 1-2.748 5z" />
        <path fill="#b51135" d="M5 63h54a4 4 0 0 0 4-4H1a4 4 0 0 0 4 4ZM1 49h62v5H1zM23 39H1v5h62v-5H23zM53.642 35H63v-5h-4.255a22.118 22.118 0 0 1-5.103 5zm7.851-10H63v-5h-.209a21.8 21.8 0 0 1-1.298 5z" />
        <path fill="#2448a8" d="M6.2 31.2 5 32l.54-1.621A21.9 21.9 0 0 1 1 17v18h9.358A22.134 22.134 0 0 1 6.2 31.2Z" />
        <path fill="#ea5172" d="M59 1H37v4h22a4 4 0 0 1 4 4V5a4 4 0 0 0-4-4Z" />
        <path fill="#4f7fff" d="M37 1H5a4 4 0 0 0-4 4v4a4 4 0 0 1 4-4h2.667L8 4l.333 1h10.334L19 4l.333 1h10.334L30 4l.333 1H37Z" />
        <path fill="#f7faff" d="M29.667 5h.666L30 4l-.333 1zM18.667 5h.666L19 4l-.333 1zM7.667 5h.666L8 4l-.333 1z" />
        <path fill="#9da3b5" d="M1 55v4h4a4 4 0 0 1-4-4zm58 4h4v-4a4 4 0 0 1-4 4z" />
        <path fill="#750a26" d="M5 59H1a4 4 0 0 0 4 4h54a4 4 0 0 0 4-4H5Z" />
      </svg>
      English
    </>
  )

  const EsSvg = () => (
    <>
      <svg className="h-6 w-6 rounded-full mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="spain">
        <g data-name="08-Spain">
          <path fill="#e21743" d="M63 5v16H1V5a4 4 0 0 1 4-4h54a4 4 0 0 1 4 4Z" />
          <path fill="#ffd45d" d="M1 21h62v22H1z" />
          <path fill="#e21743" d="M63 43v16a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V43Z" />
          <path fill="#c7002b" d="M1 17v4h.37A22.058 22.058 0 0 1 1 17zm62 4v-4a22.058 22.058 0 0 1-.37 4z" />
          <path fill="#ffb844" d="M41 39H23A22 22 0 0 1 1.37 21H1v22h62V21h-.37A22 22 0 0 1 41 39Z" />
          <path fill="#c7002b" d="M1 59a4 4 0 0 0 4 4h54a4 4 0 0 0 4-4V43H1Z" />
          <path fill="#b51135" d="M59 59H5a4 4 0 0 1-4-4v4a4 4 0 0 0 4 4h54a4 4 0 0 0 4-4v-4a4 4 0 0 1-4 4Z" />
          <path fill="#ea5172" d="M59 1H5a4 4 0 0 0-4 4v4a4 4 0 0 1 4-4h54a4 4 0 0 1 4 4V5a4 4 0 0 0-4-4Z" />
          <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M24 29v11M8 29v11" />
          <path fill="#e21743" d="M19 24a1.959 1.959 0 0 1 2 2 1.8 1.8 0 0 1-.988 1.744A1.935 1.935 0 0 0 19 29.482V30h-6v-.518a1.935 1.935 0 0 0-1.012-1.738A1.8 1.8 0 0 1 11 26a1.959 1.959 0 0 1 2-2Z" />
          <path fill="#eef2fa" d="M21 30v5h-5v-5h5z" />
          <path fill="#e21743" d="M16 35v5c-2.76 0-5-.69-5-4v-1zm5 0v1c0 3.31-2.24 4-5 4v-5zM16 30v5h-5v-5h5z" />
          <path fill="#eef2fa" d="M23 29h2v11h-2zM7 29h2v11H7z"></path><path fill="#ffb844" d="M14 35v4.828a8.147 8.147 0 0 0 1 .136V35zm-2 0v3.863a3.28 3.28 0 0 0 1 .656V35zm1-5.518V30h6v-.518a2.1 2.1 0 0 1 .062-.482h-6.124a2.1 2.1 0 0 1 .062.482z" />
          <path fill="#c7002b" d="M14 37.063a20.932 20.932 0 0 1-1-.484v2.94a6.26 6.26 0 0 0 2 .445 8.147 8.147 0 0 1-1-.136zm-1 2.456a3.28 3.28 0 0 1-1-.656V36.05c-.342-.2-.67-.418-1-.634V36c0 1.958.788 2.995 2 3.519zm3-1.677a22.795 22.795 0 0 1-1-.356v2.478c.323.025.658.036 1 .036 1.685 0 3.173-.261 4.079-1.214A21.884 21.884 0 0 1 16 37.842z" />
          <path fill="#cdd2e1" d="M24 39h-1v1h2v-1h-1zM7 32.067V40h2v-6.042a21.716 21.716 0 0 1-1-.895q-.516-.482-1-.996Z" />
          <path fill="#ffb844" d="M15 39.964z" />
          <path fill="#d18f23" d="M14 37.063v2.765a8.147 8.147 0 0 0 1 .136v-2.478c-.338-.132-.67-.275-1-.423Z" />
          <path fill="#ffb844" d="M13 39.519z" />
          <path fill="#d18f23" d="M12 36.05v2.813a3.28 3.28 0 0 0 1 .656v-2.94c-.336-.172-.674-.34-1-.529Z" />
        </g>
      </svg>
      Español
    </>
  )

  const handleChangeLanguage = (language: "En" | "Es") => {
    setShowLanguages(!showLanguages);
    setLanguageActive(language);
  };
  
  return (
    <div className="relative inline-block text-left">
      <button 
        type="button" 
        data-dropdown-toggle="language-dropdown-menu" 
        className={`${classes.navbarIcons.light} ${darkMode && classes.navbarIcons.dark} items-center hover:text-orange-600 gap-2`}
        onClick={() => setShowLanguages(!showLanguages)}
      >
        {
          languageActive === "En" ? <EnSvg /> : <EsSvg />
        }
      </button>

        {/* !-- Dropdown --> */}

        <div className={`z-50 ${!showLanguages && "hidden"} absolute my-2 text-gray-500 list-none bg-white divide-y divide-gray-100 rounded-lg shadow left-[-18px] lg:left-0 ${darkMode && "dark:bg-gray-700 "}`}>
          <ul className="py-2 font-medium" role="none">

            <li onClick={() => handleChangeLanguage("En")}>
              <a href="#" className={`${classes.languageItem} ${darkMode && classes.languageItemDark}`} role="menuitem">
                <div className="inline-flex items-center gap-2">
                  <EnSvg />
                </div>
              </a>
            </li>

            <li onClick={() => handleChangeLanguage("Es")}>
            <a href="#" className={`${classes.languageItem} ${darkMode && classes.languageItemDark}`} role="menuitem">
                <div className="inline-flex items-center gap-2">
                  <EsSvg />
                </div>
              </a>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default LanguageButton