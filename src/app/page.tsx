import { Main } from '../components'
import Link from 'next/link'
import HeroCanvas from './../components/home/HeroCanvas';

export default function Home() {
  return (
      <Main>
        <section className={`relative w-full h-[calc(100vh_-_112px)] mx-auto flex`}>
          <div className="w-full md:w-[50%]">
            <h1 className='text-orange-600 text-2xl'>Hello, I'm Cristian welcome to my portfolio</h1>
            <Link className="text-white" href="/blog">Ir al blog</Link>
          </div>
          <div className="w-full md:w-[50%]">
            <HeroCanvas />
          </div>
        </section>
      </Main>
  )
}
