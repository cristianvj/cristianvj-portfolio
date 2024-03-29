import React, { FC } from 'react';

import Image from 'next/image';

import SotialNetworkButtons from '../layout/navbar/SotialNetworkButtons';
import Categories from './Categories';

import { grpahCMSImageLoader } from '@/utils/utils';
import { useDarkContext } from '@/context/darkMode.context';

import { classes } from '@/utils/consts';

const Jumbotron: FC = () => {

  const { darkMode } = useDarkContext() || {};
  const { bgLightMode, bgDarkMode, h5Dark, h5Light, pDark, pLight, spanDark, spanLight, orangeSpan } = classes.blog;

  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-nowrap justify-between items-start gap-6 mb-3">
      {
        // Welcome
      }
      <div className={`
        w-full lg:max-w-[60%] rounded-lg 
        ${darkMode ? bgDarkMode : bgLightMode}
        `
      }>
        <picture>
          <div className='z-10 bg-black/30 absolute p-3 mt-[1rem] ml-5 max-w-[360px] rounded-lg title-card-image'>
            <p className='text-white text-left text-2xl md:text-4xl font-bold'>Welcome to my blog <span className="text-orange-600">Full Stack Dev</span></p>
          </div>
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            className="relative inline-block rounded-t-lg w-full max-h-[320px] object-cover" 
            src="/img/front-end-interview.jpg"
            alt="blog-image"
            width={50} 
            height={50}
          />
        </picture>

        <div className="p-5">
            <div>
                <h5 className={`
                  mb-2 text-2xl font-bold tracking-tight  
                  ${darkMode ? h5Dark : h5Light}
                `}>Welcome!</h5>
            </div>
            <p className={`
              mb-3 font-normal
              text-justify
              ${darkMode ? pDark : pLight}`}>
              Here you&apos;ll find a treasure trove of knowledge and resources dedicated to web programming, 3D web interfaces, and all the subjects that have helped me prepare for interview questions and excel in the world of software development.
              <br/>
              <br/>
              Whether you&apos;re a seasoned developer looking for clever tricks and industry insights or a beginner eager to dive into the world of web development, this blog is here to guide you. Expect to find helpful tips, coding techniques, and recommended resources that will sharpen your skills and empower you on your programming journey.
              <br/>
              <br/>
              Join me as we explore the fascinating world of software development together. Let&apos;s unlock the secrets of web programming, delve into the realm of 3D web interfaces, and equip ourselves with the knowledge to conquer any interview challenge that comes our way.
              <br/>
              <br/>
              Get ready to expand your programming prowess and embark on an exciting adventure of learning and growth. Stay tuned for regular updates and feel free to reach out with any questions or suggestions.
              <br/>
              <br/>
              Happy coding!
            </p>
            <p className={`
              mb-3
              ${darkMode ? spanDark : spanLight} 
            `}><span className={orangeSpan}>Topics:</span> JS, React, Three.js, Algoritmos.</p>
        </div>
      </div>

      {
        // Author and newsletter
      }
      <div className='w-full lg:max-w-[40%] flex flex-col items-start gap-6'>
        {
          //About author
        }
        <div className={`
          w-full rounded-lg p-4
          ${darkMode ? bgDarkMode : bgLightMode}
        `}>

          <h5 className={`
            text-2xl font-bold  
            ${darkMode ? h5Dark : h5Light}
          `}>Sobre el autor</h5>
            <div className="flex flex-row flex-nowrap gap-5 items-center my-3">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                src={"/img/cristian.jpg"} 
                alt="" 
                className="rounded-full w-[4rem] h-[4rem] object-cover ring-2 ring-slate-500" 
                height={500}
                width={500}
              />
              <div>
                <h5 className="text-xl font-semibold text-orange-600">Cristian Villota</h5>
                <p className={`
                  text-md 
                  ${darkMode ? pDark : pLight}`}>Ingeniero de sistemas, desarrollador de interfaces 3D y web apps Full Stack con React.js y Node.js. </p>
              </div>
            </div>
            <p className={`
                text-sm font-normal text-slate-500 
                ${darkMode ? spanDark : spanLight}
              `}><span className={orangeSpan}>Skills: </span> Javascript ES6, Typescript, Node.js, React.js, Next.js, Three.js, Redux, GraphQL, Git, Storybook, Tailwind, Material UI, Express.js, Node.js. Nest.js, PostgressDB, MongoDB</p>
            <div className='flex flex-row flex-nowrap justify-end'>
              <SotialNetworkButtons darkMode={false}/>
            </div>
        </div>

        {
          //Newsletter
        }
        <section className={`
          w-full p-6 space-y-3 sm:p-8 rounded-lg   
          ${darkMode ? bgDarkMode : bgLightMode}`}>
          <h2 className={`
            text-2xl font-semibold
            ${darkMode ? h5Dark : h5Light}`}>
              Entérate cuando escriba nuevos posts
          </h2>
          <form className="mt-8 space-y-4" action="#">
            <div>
                <label htmlFor="email" className={`
                  block mb-2 text-sm font-medium  
                  ${darkMode ? pDark : pLight}`}>Déjame tu email, cero spam</label>
                <input type="email" name="email" id="email" className={`bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 ${darkMode && `bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-orange-500 focus:border-orange-500`}`} placeholder="name@company.com" required />
            </div>
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 sm:w-auto dark:bg-orange-600">Suscribete</button>
          </form>
        </section>

      <Categories/>
      
      </div>
      
    </div>
  )
};

export default Jumbotron;