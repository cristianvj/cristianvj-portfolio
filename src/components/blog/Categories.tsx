import React from 'react';
import { useDarkContext } from '@/context/darkMode.context';

const Categories = () => {
  const { darkMode } = useDarkContext() || {};
  return (
    <div className={`w-full p-5 rounded-lg bg-gray-100 text-gray-700 ${darkMode && "dark:bg-gray-800 dark:text-gray-200"}`}>Categories</div>
  )
}

export default Categories