import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <h1 className='text-rose-500 text-2xl'>Hello, welcome to my portfolio</h1>
      <Link className="text-white" href="/blog">Ir al blog</Link>
    </div>
  )
}
