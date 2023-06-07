import React, { FC } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Post } from '../../interfaces';
import { useDarkContext } from '@/context/darkMode.context';

interface props {
  post: Post
}

const PostDetail: FC<props> = ({post}) => {

  const { darkMode } = useDarkContext() || {};

  return (
    <div className={`w-full rounded-lg p-5 bg-gray-100 ${darkMode && "dark:bg-gray-800 dark:text-gray-100"}`}>
        {post?.content?.raw && <RichText
          content={post.content.raw}
          renderers={{
            h1: ({ children }) => <h1 className={`font-bold mb-3 text-4xl`}>{children}</h1>,
            h2: ({ children }) => <h2 className={`text-3xl font-semibold mb-4`}>{children}</h2>,
            h3: ({ children }) => <h3 className={`font-semibold mb-3 text-2xl`}>{children}</h3>,
            h4: ({ children }) => <h4 className={`text-xl font-semibold mb-4`}>{children}</h4>,
            p: ({ children }) => <p className={`mb-4 text-lg text-justify ${darkMode && "dark:text-gray-300"}`}>{children}</p>,
            ul: ({ children }) => <ul className={`list-disc ml-5 mb-6 text-lg text-justify ${darkMode && "dark:text-gray-300"}`}>{children}</ul>,
            ol: ({ children }) => <ol className={`list-decimal ml-5 mb-8 text-lg text-justify`}>{children}</ol>,
            bold: ({ children }) => <b>{children}</b>,
            italic: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
            table: ({ children }) => <table className={`table-auto text-lg`}>{children}</table>,
            code: ({ children }) => <code className={`text-gray-800`}>{children}</code>
          }}
        />}
    </div>
  )
};

export default PostDetail;