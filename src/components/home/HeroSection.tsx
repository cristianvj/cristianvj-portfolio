'use client';

import React from 'react';
import HeroCanvas from './HeroCanvas';
import { motion } from 'framer-motion';
import { useDarkContext } from '@/context/darkMode.context';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const { darkMode } = useDarkContext() || {};
  const t = useTranslations('Home');
  return (
    <section className="relative w-full h-[calc(100vh_-_112px)] mx-auto flex flex-wrap justify-evenly">
      <div className={`w-full md:w-[40%] md:p-10 md:absolute md:left-16 md:top-16 z-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-300'} p-5 rounded-xl bg-opacity-60`}>
        <h1 className={`
           bg-opacity-100 text-3xl md:text-6xl font-bold
          ${darkMode ? "text-white" : "text-gray-600"}
        `}>{t('hello')} </h1>
        <h2 className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} text-2xl md:text-4xl pt-2`}>{t('welcome')}</h2>
        <h3 className={`
          text-lg md:text-2xl pt-2 border-l-4 border-orange-600 pl-4 mt-4
          ${darkMode ? "text-gray-200" : "text-gray-800"}
        `}>
          {t('shortDescription')}
        </h3>
      </div>
      <div className="w-full z-10 mt-[1rem] md:mt-0">
        <HeroCanvas />
      </div>
      
      <div className='absolute xs:bottom-12 bottom-5 w-full flex justify-center items-center z-20'>
        <a href='#about' className={`${darkMode ? 'bg-slate-800 md:bg-transparent p-1 rounded-3xl opacity-80 md:opacity-100' : ''}`}>
          <div className={`
            opacity-100 w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2
            ${darkMode ? "border-gray-300" : "border-gray-600"}
          `}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`
                w-3 h-3 rounded-full mb-1
                ${darkMode ? "bg-gray-300" : "bg-gray-600"}
              `}
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default HeroSection;