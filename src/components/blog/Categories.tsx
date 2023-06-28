'use client';

import React, { useState, useEffect, FC} from 'react';
import Link from 'next/link';

import { getCategories } from '../../services';

import { useDarkContext } from '@/context/darkMode.context';

type Category = {
  name: string;
  slug: string;
};

const Categories: FC = () => {
  const { darkMode } = useDarkContext() || {};

  const [categories, setCategories] = useState <Category[]> ([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className={`w-full p-5 rounded-lg bg-gray-100 text-gray-700 ${darkMode && "dark:bg-gray-800 dark:text-gray-200"}`}>
      <h3 className='text-xl mb-4 font-semibold border-b pb-4'>
          Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {
          categories.map(category => (
            <Link 
              key={category.slug} 
              href={`/category/${category.slug}`}
              className={`
                bg-gray-100 text-gray-800 text-md font-large mr-2 px-2.5 py-0.5 rounded 
                ${darkMode ? "dark:bg-gray-700 dark:text-gray-300" : "bg-gray-300 dark:text-gray-700"}
              `}
            >
              { category.name }
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Categories;