'use client';

import React from 'react';
import HeroCanvas from './HeroCanvas';
import { motion } from 'framer-motion';
import { useDarkContext } from '@/context/darkMode.context';

const HeroSection = () => {
  const { darkMode } = useDarkContext() || {};

  return (
    <section className={`
      relative w-full h-[calc(100vh_-_112px)] mx-auto flex flex-wrap justify-evenly 
    `}>
      <div className={`w-full md:w-[40%] md:pt-4 md:pl-4 absolute left-1 z-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-300'} p-5 rounded-xl bg-opacity-60`}>
        <h1 className={`
           bg-opacity-100 text-3xl md:text-4xl
          ${darkMode ? "text-white" : "text-gray-600"}
        `}><span className="text-orange-600">Hello,</span> I&apos;m Cristian </h1>
        <h2 className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} text-2xl md:text-2xl pt-2`}>Welcome to my portfolio</h2>
        <h3 className={`
          text-lg md:text-xl pt-2 border-l-4 border-orange-600 pl-4 mt-4
          ${darkMode ? "text-gray-200" : "text-gray-800"}
        `}>
          I&apos;m  a full stack developer specilized in create 3D user interfaces using Three.js and the MERN stack
        </h3>
      </div>
      <div className="w-full z-10 mt-[12rem] md:mt-0">
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