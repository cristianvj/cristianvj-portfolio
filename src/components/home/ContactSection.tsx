'use client';

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import EarthCanvas from './EarthCanvas';
import { useDarkContext } from '@/context/darkMode.context';
import { useTranslations } from 'next-intl';

const ContactSection = () => {
  const { darkMode } = useDarkContext() || {};
  const t = useTranslations('Home');
  
  const formRef = useRef(null);
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value } = e.target;
    
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_29grrix', 
      'template_dih40xf', 
      {
        from_name: form.name,
        to_name: 'Cristian Villota',
        from_email: form.email,
        to_email: 'cristiandavid.vj@gmail.com',
        message: form.message,
      }, 
      'E0AZTC8bG5NE61bJE'
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.");
    });
  };

  return (
    <section className='xl:mt-12 flex flex-col-reverse md:flex-row justify-evenly items-center gap-10 overflow-hidden'>
      <div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl w-full md:w-[50%]'
      >
        <p className={`
          sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider 
          ${darkMode ? "text-white" : "text-gray-800"}
        `}>{t('getInTouch')}</p>
        <h3 className={`
          font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]
          ${darkMode ? "text-white" : "text-gray-700"}
        `}>{t('contact')}</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className={`
            mt-12 flex flex-col gap-8
            p-4 rounded-xl 
            ${darkMode ? "bg-slate-800" : "bg-slate-300 "}
          `}
        >
          <label className="flex flex-col">
            <span className={`${darkMode ? "text-gray-100" : "text-gray-800"} font-medium mb-4`}>{t('yourName')}</span>
            <input 
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('whatsYourName')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className={`${darkMode ? "text-gray-100" : "text-gray-800"} font-medium mb-4`}>{t('yourEmail')}</span>
            <input 
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('whatsYourEmail')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className={`${darkMode ? "text-gray-100" : "text-gray-800"} font-medium mb-4`}>{t('yourMessage')}</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('tellMeMore')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-700 rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-orange-600'
            >
            { loading ? t('sending') : t('send')}
          </button>
        </form>
      </div>

      <div
        className='md:h-[550px] h-[350px] w-full md:w-[50%]'
      >
        <EarthCanvas />
      </div>
    </section>
  );
};

export default ContactSection;