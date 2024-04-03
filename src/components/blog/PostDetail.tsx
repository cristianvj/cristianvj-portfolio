import React, { FC, ReactNode } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Post } from '../../interfaces';
import { useDarkContext } from '@/context/darkMode.context';
import { classes } from '@/utils/consts';

interface props {
  post: Post
}

const PostDetail: FC<props> = ({post}) => {

  const { darkMode } = useDarkContext() || {};

  const { bgLightMode, bgDarkMode, h5Dark, h5Light, pDark, pLight, spanDark, spanLight, orangeSpan } = classes.blog;

  return (
    <div className={`w-full rounded-lg p-5 ${orangeSpan} ${darkMode ? `${bgDarkMode} ${h5Dark} ${pDark} ${spanDark}` : `${bgLightMode} ${h5Light} ${pLight} ${spanLight}`}`}>
        {post?.content?.raw && <RichText
          content={post.content.raw}
          renderers={{
            h1: ({ children }) => <h1 className={`font-bold mb-3 text-4xl`}>{children}</h1>,
            h2: ({ children }) => <h2 className={`text-3xl font-semibold mb-4`}>{children}</h2>,
            h3: ({ children }) => <h3 className={`font-semibold mb-3 text-2xl`}>{children}</h3>,
            h4: ({ children }) => <h4 className={`text-xl font-semibold mb-4`}>{children}</h4>,
            p: ({ children }) => <p className={`mb-4 text-lg text-justify font-normal ${darkMode ? pDark : pLight}`}>{children}</p>,
            ul: ({ children }) => <ul className={`list-disc ml-5 pl-4 mb-6 text-lg text-justify ${darkMode ? pDark : pLight}`}>{children}</ul>,
            ol: ({ children }) => <ol className={`list-decimal ml-5 mb-8 text-lg text-justify ${darkMode ? pDark : pLight}`}>{children}</ol>,
            bold: ({ children }) => <b>{children}</b>,
            italic: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
            table: ({ children }) => <table className={`table-auto text-lg`}>{children}</table>,
            code: ({ children }) => <code className={`italic text-sm p-1 bg-gray-200 px-3 py-0 rounded-none text-gray-800`}>{children}</code>
          }}
        />}
    </div>
  )
};

export default PostDetail;