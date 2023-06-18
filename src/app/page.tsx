import { Main } from '../components'
import Link from 'next/link'
import HeroCanvas from './../components/home/HeroCanvas';

export default function Home() {
  return (
      <Main>
        <section className={`relative w-full h-[calc(100vh_-_112px)] mx-auto flex flex-wrap`}>
          <div className="w-full md:w-[45%] md:pt-4 md:pl-4">
            <h1 className='text-orange-600 text-6xl'>Hello,</h1>
            <h1 className='text-gray-200 text-7xl pt-2'>I&apos;m Cristian </h1>
            <h2 className='text-gray-400 text-4xl pt-2'>welcome to my portfolio</h2>
          </div>
          <div className="w-full md:w-[45%]">
            <HeroCanvas />
          </div>
        </section>
      </Main>
  )
}
