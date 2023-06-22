import React from 'react'
import HeroCanvas from './HeroCanvas'

const HeroSection = () => {
  return (
    <section className={`relative w-full h-[calc(100vh_-_112px)] mx-auto flex flex-wrap justify-evenly`}>
      <div className="w-full md:w-[45%] md:pt-4 md:pl-4">
        <h1 className='text-white text-3xl md:text-6xl'><span className="text-orange-600">Hello,</span> I&apos;m Cristian </h1>
        <h2 className='text-gray-400 text-2xl md:text-4xl pt-2'>Welcome to my portfolio</h2>
        <h3 className='text-gray-200 text-lg md:text-2xl pt-2 border-l-4 border-orange-600 pl-4 mt-4'>I&apos;m  a front end developer specilized in create 3D user interfaces using Three.js and React.js</h3>
      </div>
      <div className="w-full md:w-[45%]">
        <HeroCanvas />
      </div>
    </section>
  )
}

export default HeroSection