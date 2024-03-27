import { useDarkContext } from '@/context/darkMode.context'
import { grpahCMSImageLoader } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const PostCard: FC<any> = ({ post }) => {

  const { darkMode } = useDarkContext() || {};

  return (
    <div className={`
      w-full md:max-w-[48%] lg:max-w-[30%] bg-gray-100 rounded-lg shadow-xl  border-gray-700
      ${darkMode && "dark:bg-gray-800 dark:border-gray-700"}`}>
      {
        post?.author?.photo?.url &&
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          src={post.featuredImage.url} 
          alt="" 
          className="rounded-t-lg w-full max-h-[220px] object-cover" 
          height={500}
          width={500}
        />
      }
      <div className="p-5">
          <a href={`/blog/${post.slug}`}>
              <h5 className={`
                mb-2 text-2xl font-bold tracking-tight text-gray-800 
                ${darkMode && "dark:text-white"}`}>{post.title}</h5>
          </a>
          <p className={`mb-3 font-normal text-gray-700 
          ${darkMode && "dark:text-gray-400"}`}>{post.excerpt}</p>

          <Link href={`/blog/${post.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
              Leer mas
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
      </div>
    </div>
  )
}

export default PostCard