import React, { FC } from 'react';
import moment from 'moment';
import { Post } from '../../interfaces';
import { grpahCMSImageLoader } from '../../utils/utils';
import Image from 'next/image';
import { useDarkContext } from '@/context/darkMode.context';

interface props {
  post: Post
}

const PostHeader: FC<props> = ({post}) => {
  console.log(post)

  const { darkMode } = useDarkContext() || {};

  return (
    <div className="w-full">
      <div className={`
        flex flex-wrap gap-3 justify-between items-center p-7 rounded-lg
        ${darkMode ? "bg-gray-800" : "bg-gray-100"}
      `}>
        
        <div className="flex flex-col gap-2 justify-start items-start md:w-[52%]">
          <h1 className={`
            mb-2 text-4xl font-semibold 
            ${darkMode ? "text-orange-500" : "text-orange-600"}
          `}>{post.title}</h1>
          <div className={`
            font-medium mb-3 w-full flex justify-start
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}
          `}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`
                h-6 w-6 inline mr-2
                ${darkMode ? "text-orange-500" : "text-orange-600"}
              `} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
          <p className={`
            text-justify
            text-lg
            ${darkMode ? "text-gray-200" : "text-gray-800"}
          `}>{post.excerpt}</p>
          <div className={`
            w-full 
            mt-4 
            p-3 
            rounded-lg 
            flex 
            nowrap
            items-center
            ${darkMode ? "dark:bg-gray-900" : "bg-gray-200"}
          `}>
            {
              post?.author?.photo?.url && 
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post?.author?.name || ""}
                height={30}
                width={30}
                className="align-middle rounded-full h-[40px] w-[40px] mr-4"
                src={post.author.photo.url}
              />
            }
            <div>
              <p className={`
                inline 
                align-middle
                text-lg
                font-semibold
                ${darkMode ? "text-gray-200" : "text-gray-800"}
              `}>{post?.author?.name || ""}</p>
              <p className={`
                text-justify text-md
                ${darkMode ? "text-gray-300" : "text-gray-800"}
              `}>{post?.author?.bio}</p>
            </div>
          </div>
          <div  className="flex w-full gap-3 mt-3">
            {
              post?.categories?.map(category => (
                <kbd key={category.slug} className={`
                  px-2 py-1.5 
                  text-xs text-gray-800 
                  bg-gray-200 
                  border border-gray-200 rounded-lg 
                  ${darkMode && "dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"}`}
                >
                  {category.name}
                </kbd>
              ))
            }
          </div>
        </div>
        
        <div className="md:w-[45%]">
          {
            post?.author?.photo?.url &&
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              src={post.featuredImage.url} 
              alt="" 
              className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" 
              height={500}
              width={500}
            />
          }
        </div>
      </div>
    </div>
  )
};

export default PostHeader;