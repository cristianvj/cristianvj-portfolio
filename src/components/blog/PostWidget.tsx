import React, { FC } from 'react';
import { useDarkContext } from '@/context/darkMode.context';

const PostWidget: FC<any> = ({categories, slug}) => {
  const { darkMode } = useDarkContext() || {};
  return (
    <div className={`w-full p-5 rounded-lg bg-gray-200 text-gray-700 ${darkMode && "dark:bg-gray-800 dark:text-gray-200"}`}>PostWidget</div>
  )
}

export default PostWidget