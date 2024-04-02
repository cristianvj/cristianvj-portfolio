'use client';

import React, { FC, useState, useEffect } from 'react';

import { useDarkContext } from '@/context/darkMode.context';

import { submitComment } from '../../services';
import { classes } from '@/utils/consts';

interface props {
  slug: string;
};

interface typesFormData {
  name: string;
  email: string;
  comment?: string;
  storeData?: boolean;
};

const CommentsForm: FC<props> = ({ slug }) => {
  const { darkMode } = useDarkContext() || {};

  const { bgLightMode, bgDarkMode, h5Dark, h5Light } = classes.blog;

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState<Storage | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState<typesFormData>({ 
    name: "", 
    email: "", 
    comment: "", 
    storeData: false 
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData: typesFormData = {
      name: window.localStorage.getItem('name') || "",
      email: window.localStorage.getItem('email') || "",
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email') ? true : false,
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e: any) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage?.setItem('name', name);
      localStorage?.setItem('email', email);
    } else {
      localStorage?.removeItem('name');
      localStorage?.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className={`
      shadow-lg 
      rounded-lg 
      p-8 pb-12 
      my-8
      ${darkMode ? bgDarkMode : bgLightMode}
    `}>
      <h3 className={`text-xl mb-8 font-semibold border-b pb-4 ${darkMode ? h5Dark : h5Light}`}>Escribe un comentario</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          value={formData.comment} 
          onChange={onInputChange} 
          className={`
            p-4 
            outline-none 
            w-full 
            rounded-lg 
            h-40 
            focus:ring-2 
            
            ${darkMode ? `
            text-slate-200
              bg-slate-600
              focus:ring-slate-200
            ` : `
              bg-slate-200
              focus:ring-slate-400
            `}
          `} 
          name="comment" 
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text" 
          value={formData.name} 
          onChange={onInputChange} 
          className={`
            py-2 px-4 
            outline-none 
            w-full 
            rounded-lg 
            focus:ring-2 
            ${darkMode ? `
            text-slate-200
              bg-slate-600
              focus:ring-slate-200
            ` : `
              bg-slate-200
              focus:ring-slate-400
            `}
          `} 
          placeholder="Name" 
          name="name" />
        <input 
          type="email" 
          value={formData.email} 
          onChange={onInputChange} 
          className={`
            py-2 px-4 
            outline-none 
            w-full 
            rounded-lg 
            focus:ring-2 
            ${darkMode ? `
            text-slate-200
              bg-slate-600
              focus:ring-slate-200
            ` : `
              bg-slate-200
              focus:ring-slate-400
            `}
          `} 
          placeholder="Email" 
          name="email" 
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-slate-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" onClick={handleCommentSubmission} className="transition duration-500 ease hover:bg-orange-800 inline-block bg-orange-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;