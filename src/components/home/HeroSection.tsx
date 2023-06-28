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
      <div className="w-full md:w-[35%] md:pt-4 md:pl-4">
        <h1 className={`
           text-3xl md:text-6xl
          ${darkMode ? "text-white" : "text-gray-600"}
        `}><span className="text-orange-600">Hello,</span> I&apos;m Cristian </h1>
        <h2 className='text-gray-400 text-2xl md:text-4xl pt-2'>Welcome to my portfolio</h2>
        <h3 className={`
          text-lg md:text-2xl pt-2 border-l-4 border-orange-600 pl-4 mt-4
          ${darkMode ? "text-gray-200" : "text-gray-800"}
        `}>
          I&apos;m  a front end developer specilized in create 3D user interfaces using Three.js and React.js
        </h3>
      </div>
      <div className="w-full md:w-[65%]">
        <HeroCanvas />
      </div>
      
      <div className='absolute xs:bottom-12 bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className={`
            w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2
            ${darkMode ? "border-gray-200" : "border-gray-600"}
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
                ${darkMode ? "bg-white" : "bg-gray-600"}
              `}
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default HeroSection;