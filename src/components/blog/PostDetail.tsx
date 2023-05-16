import React, { FC } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import moment from 'moment';
import { PropsPostContent } from '../../interfaces';
import { grpahCMSImageLoader } from '../../utils/utils';
import Image from 'next/image';

const PostDetail: FC<PropsPostContent> = ({ post }) => (
  <>
    <div className="bg-white shadow-lg rounded-lg lg:p-12 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
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
      <div className="px-4 lg:px-0">
        <div className="flex items-center justify-center mb-4 w-full">
          <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              {
                post?.author?.photo?.url && 
                <Image
                  unoptimized
                  loader={grpahCMSImageLoader}
                  alt={post?.author?.name || ""}
                  height={30}
                  width={30}
                  className="align-middle rounded-full"
                  src={post.author.photo.url}
                />
              }
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post?.author?.name || ""}</p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-4xl font-semibold text-center">{post.title}</h1>
        <RichText
          content={post.content.raw}
          renderers={{
            h1: ({ children }) => <h1 className="font-bold mb-3 text-4xl">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-semibold mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="font-semibold mb-3 text-2xl">{children}</h3>,
            h4: ({ children }) => <h4 className="text-xl font-semibold mb-4">{children}</h4>,
            p: ({ children }) => <p className="mb-8 text-xl text-justify">{children}</p>,
            ul: ({ children }) => <ul className="list-disc ml-5 mb-8 text-xl text-justify">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal ml-5 mb-8 text-xl text-justify">{children}</ol>,
            bold: ({ children }) => <b>{children}</b>,
            italic: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
            table: ({ children }) => <table className="table-auto text-xl">{children}</table>
          }}
        />
      </div>
    </div>
  </>
);

export default PostDetail;