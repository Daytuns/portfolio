import React from 'react'
import { useState, useEffect } from 'react';


const Intro = () => {

  const [copied, setCopied] = useState(false);

  function CopyEmail() {
    navigator.clipboard.writeText('daytonbaldizon@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
  }

  return (
    <>
      <div className="font-bold text-2xl/9 mt-44">
        <p>
          Dayton Baldizón, <br />
          fullstack{' '}
          <span className="bg-gradient-to-r from-[#FF00D0] to-[#FF7C09] bg-[length:200%] bg-clip-text text-transparent animate-gradient-move">
            developer
          </span>{' '}
          and electrical engineer
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-5 text-lg">
        <div onClick={CopyEmail} className="group flex flex-row gap-1 items-center cursor-pointer">
          {copied ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7"
                className="stroke-[#777a81] group-hover:stroke-[#9f9ea0]"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ):
          (
          <svg
            style={{ transform: 'scaleX(-1)' }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:stroke-[#9f9ea0]"
          >
            <path
              d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15"
              className="stroke-[#777a81] group-hover:stroke-[#9f9ea0]"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>)
          }
          <p className="grey-links">Email</p>
        </div>
        <a href='https://www.linkedin.com/in/daytonbaldizon/' target="_blank" className="grey-links">Linkedin</a>
        <a href='https://github.com/Daytuns' target="_blank" className="grey-links">Github</a>
      </div>
    </>
  )
}

export default Intro
