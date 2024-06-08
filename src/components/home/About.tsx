'use client';

import { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Image from "next/image";
import { grpahCMSImageLoader } from "../../utils/utils";
import { useDarkContext } from '@/context/darkMode.context';
import { services } from "./utils";
import { useTranslations } from 'next-intl';

interface Props {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard: FC<Props> = ({ index, title, icon }) => {
  const { darkMode } = useDarkContext() || {};

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="p-4 align-middle rounded-3xl flex flex-col gap-2 items-center max-w-[140px]"
    >
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        src={`/img/tech/${icon}.png`} 
        alt='web-development'
        className='w-20 h-20 object-contain' 
        width= {"8"}
        height= {"8"}
      />
      <p className={`
        text-lg font-semibold text-center
        ${darkMode ? "text-gray-200" : "text-gray-600"}
      `}>{title}</p>
    </motion.div>
  )
};

const About = () => {
  const { darkMode } = useDarkContext() || {};
  const t = useTranslations('Home');

  const aboutMeDescription = useMemo(() => t('aboutMeDescription').split('\n'), [t]);


  return (
  <section className={`
  z-20 relative p-4 my-8 gap-4 flex flex-wrap justify-center align-middle 
  rounded-lg drop-shadow-lg md:py-24
    ${darkMode ? "bg-slate-800" : "bg-slate-300" }
  `}>
    <div className="w-full md:w-[48%]">
      <motion.div variants={textVariant()}>
        <h2 className="text-orange-600 font-black md:text-6xl sm:text-[50px] xs:text-[40px] text-[30px]">{t('aboutMeTitle')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`text-2xl md:text-xl max-w-3xl mt-10 leading-[30px] border-l-4 border-orange-600 px-4
          ${darkMode ? "text-gray-200" : "text-gray-800"}`}
      >
        {aboutMeDescription.map((paragraph, index) => (
          <span className={` text-2xl md:text-xl
          ${darkMode ? "text-gray-200" : "text-gray-800"}`} key={index}>
            {paragraph}
            <br />
            <br />
          </span>
        ))}
      </motion.p>
    </div>

    <div className='w-full md:w-[48%] flex flex-wrap gap-4 justify-center items-center'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </section>
  )
};

export default About;