'use client';

import React, { useState, useEffect, FC} from 'react';
import Link from 'next/link';

import { getCategories } from '../../services';

import { useDarkContext } from '@/context/darkMode.context';
import { classes } from '@/utils/consts';

type Category = {
  name: string;
  slug: string;
};

const Categories: FC = () => {
  const { darkMode } = useDarkContext() || {};
  const { bgLightMode, bgDarkMode, h5Dark, h5Light } = classes.blog;

  const [categories, setCategories] = useState <Category[]> ([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className={`w-full p-5 rounded-lg  ${darkMode ? bgDarkMode : bgLightMode}`}>
      <h3 className={`text-xl mb-4 font-semibold border-b pb-4 ${darkMode ? h5Dark : h5Light}`}>
          Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {
          categories.map(category => (
            <Link 
              key={category.slug} 
              href={`/category/${category.slug}`}
              className={`
                text-md font-large mr-2 px-2.5 py-0.5 rounded 
                ${darkMode ? "bg-slate-600 text-slate-200" : "bg-slate-200 dark:text-slate-700"}
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