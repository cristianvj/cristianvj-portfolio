import { grpahCMSImageLoader } from '@/utils/utils'
import Image from 'next/image'
import React, { FC } from 'react'

const FeaturedPosts: FC<any> = ({post}) => {
  return (
    <div className="w-full lg:w-[50%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        className="rounded-t-lg w-full max-h-[320px] object-cover" 
        src="https://flowbite.com/docs/images/blog/image-4.jpg"
        alt=""
        width={50} 
        height={50}
      />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bienvenido a mi blog</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aqui encontrarás recursos muy utiles para prepararte para tus entrevistas de trabajo como front end y resolver ciertos bugs que día a día nos enfrentamos como desarrolladores web.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 text-bold"><b>Topics:</b> JS, React, Three.js, Algoritmos.</p>
    </div>
    </div>
  )
}

export default FeaturedPosts