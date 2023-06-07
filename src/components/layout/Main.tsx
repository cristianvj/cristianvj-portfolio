'use client';

import React, { FC, ReactNode } from 'react';
import { useDarkContext } from '../../context/darkMode.context';

interface props{
  children: ReactNode;
}

const Main: FC<props> = ( { children } ) => {

  const { darkMode } = useDarkContext() || {};

  return (
    <main className={`
      pt-[7rem] 
      w-full 
      px-4
      min-h-screen 
      bg-white 
      ${darkMode && darkMode && "dark:bg-gray-900"}`}
    >
      { children }    
    </main>
  )
}

export default Main;