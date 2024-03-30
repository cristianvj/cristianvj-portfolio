'use client';

import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';

import { useDarkContext } from '@/context/darkMode.context';

import { getComments } from '../../services';
import { classes } from '@/utils/consts';

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
  const { bgLightMode, bgDarkMode, h5Dark, h5Light, spanDark, spanLight } = classes.blog;

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
          bg-slate-100
          ${darkMode ? bgDarkMode : bgLightMode}
          
        `}>
          <h3 className={`text-xl mb-8 pb-4 font-semibold border-b ${darkMode ? h5Dark : h5Light}`}>
            Comentarios de los usuarios
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className={`
                mb-4
                p-4
                rounded-lg
                shadow-lg
                ${darkMode ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-800" }
              `}>
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className={`whitespace-pre-line w-full ${darkMode ? spanDark : spanLight}`}>{comment.comment}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;