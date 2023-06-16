'use client';

import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';

import { useDarkContext } from '@/context/darkMode.context';

import { getComments } from '../../services';

interface props {
  slug: string;
};

interface comments {
  name: string;
  createdAt: string;
  comment: string;
};

const Comments: FC<props> = ({ slug }) => {
  const { darkMode } = useDarkContext() || {};

  const [comments, setComments] = useState<comments[]>([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className={`
          mt-8 
          w-full 
          rounded-lg 
          shadow-lg
          p-5
          bg-gray-100
          ${darkMode && "dark:bg-gray-800 dark:text-gray-100"}
          
        `}>
          <h3 className="text-xl mb-8 pb-4 font-semibold border-b">
            Comentarios de los usuarios
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className={`
                mb-4
                p-4
                rounded-lg
                shadow-lg
                bg-gray-200
                ${darkMode && "dark:bg-gray-900 dark:text-gray-100"}
              `}>
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{comment.comment}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;