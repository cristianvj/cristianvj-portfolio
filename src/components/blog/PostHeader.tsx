import React, { FC } from 'react';
import moment from 'moment';
import { Post } from '../../interfaces';
import { grpahCMSImageLoader } from '../../utils/utils';
import Image from 'next/image';
import { useDarkContext } from '@/context/darkMode.context';

import { classes } from '@/utils/consts';

interface props {
  post: Post
}

const PostHeader: FC<props> = ({post}) => {

  const { darkMode } = useDarkContext() || {};
  const { bgLightMode, bgDarkMode, pDark, pLight, spanDark, spanLight } = classes.blog;

  return (
    <div className="w-full">
      <div className={`
        flex flex-wrap gap-3 justify-between items-center p-7 rounded-lg
        ${darkMode ? bgDarkMode : bgLightMode}
      `}>
        
        <div className="flex flex-col gap-2 justify-start items-start md:w-[52%]">
          <h1 className={`
            mb-2 text-4xl font-semibold text-center 
            ${darkMode ? "text-orange-700" : "text-orange-600"}
          `}>{post.title}</h1>
          <div className={`
            font-normal size-3 mb-3 w-full flex justify-start
            ${darkMode ? spanDark : spanLight}
          `}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`
                h-5 w-5 inline mr-2
                ${darkMode ? "text-orange-600" : "text-orange-500"}
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
            ${darkMode ? pDark : pLight}
          `}>{post.excerpt}</p>
          <div className={`
            w-full 
            mt-4 
            p-3 
            rounded-lg 
            flex 
            nowrap
            items-center
            ${darkMode ? "bg-slate-700" : "bg-slate-200"}
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
                ${darkMode ? "text-slate-200" : "text-slate-800"}
              `}>{post?.author?.name || ""}</p>
              <p className={`
                text-justify text-md
                ${darkMode ? "text-slate-300" : "text-slate-800"}
              `}>{post?.author?.bio}</p>
            </div>
          </div>
          <div  className="flex w-full gap-3 mt-3">
            {
              post?.categories?.map(category => (
                <kbd key={category.slug} className={`
                  px-2 py-1.5 
                  text-xs
                  border border-slate-200 rounded-lg 
                  ${darkMode ? "bg-slate-600 text-slate-100 border-slate-500" : "bg-slate-200"}`}
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