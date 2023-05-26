import { grpahCMSImageLoader } from '@/utils/utils'
import Image from 'next/image'
import React, { FC } from 'react'

const FeaturedPosts: FC<any> = ({post}) => {
  return (
    <div className="w-full lg:w-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <picture>
        <div className='z-10 bg-black/30 absolute p-2 mt-[1rem] ml-5 max-w-[320px] rounded-lg title-card-image'>
          <p className='text-white text-center text-2xl md:text-4xl font-bold'>Prepárate para tus entrevistas de <span className="text-orange-600">Front end</span></p>
        </div>
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          className="relative inline-block rounded-t-lg w-full max-h-[320px] object-cover" 
          src="/img/front-end-interview.jpg"
          alt=""
          width={50} 
          height={50}
        />
      </picture>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bienvenido a mi blog</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aqui encontrarás un banco de preguntas frecuentes y recursos muy utiles para prepararte para tus entrevistas de trabajo como front end y resolver ciertos bugs que día a día nos enfrentamos como desarrolladores web, mobile y 3d.</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 text-bold"><span className="text-orange-600">Topics:</span> JS, React, Three.js, Algoritmos.</p>
      </div>
    </div>
  )
}

export default FeaturedPosts