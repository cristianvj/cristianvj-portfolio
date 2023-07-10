'use client';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { FC } from "react";
import Image from "next/image";
import { grpahCMSImageLoader } from "../../utils/utils";
import { useDarkContext } from '@/context/darkMode.context';

const services = [
  {
    title: "Javascript",
    icon: "javascript",
  },
  {
    title: "Typescript",
    icon: "typescript",
  },
  {
    title: "React.js",
    icon: "react",
  },
  {
    title: "Next.js",
    icon: "next",
  },
  {
    title: "Three.js",
    icon: "threejs",
  },
  {
    title: "Redux.js",
    icon: "redux",
  },
  {
    title: "React testing Library",
    icon: "rtl",
  },
  {
    title: "Storybook",
    icon: "storybook",
  },
  {
    title: "Styled Components",
    icon: "styled",
  },
  {
    title: "Tailwind",
    icon: "tailwind",
  },
  {
    title: "Git and Github",
    icon: "git",
  },
];

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

  return (
  <section className={`
    p-4 my-8 gap-4 flex flex-wrap justify-center align-middle 
  rounded-lg drop-shadow-lg
    ${darkMode ? "bg-gray-800" : "bg-gray-100" }
  `}>
    <div className="w-full md:w-[48%]">
      <motion.div variants={textVariant()}>
        <h2 className="text-orange-600 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`
          mt-4 text-lg md:text-xl max-w-3xl leading-[30px] border-l-4 border-orange-600 px-4
          ${darkMode ? "text-gray-200" : "text-gray-800"}
        `}
      >
        I&apos;m a skilled software developer with experience in JavaScript and
        TypeScript. <br/> <br/>
        I have experience working with frameworks like React, Node.js, and Three.js. <br/> <br/> 
        I&apos;m a quick learner and collaborate closely with international and remote teams to create efficient, scalable, and user-friendly solutions that solve real-world problems. <br/> <br/>
        Let&apos;s work together to bring your ideas to life!
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