import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa6";

const Tools = () => {
  const cardStyles = `bg-zinc-800 shadow-md p-4
  rounded flex flex-col justify-center items-center cursor-pointer
   gap-2 h-[25vh] w-[35vw] max-md:w-[45vw] max-md:h-[30vh]`;
  const headingStyle = `text-2xl max-md:text-xl font-semibold
  text-center flex justify-center items-center gap-2 `;
  return (
    <>
      <h2 className='bg-[#34312d] border-[1px] border-[#484441]
      justify-center items-center px-3 py-2 rounded-full '
      >Your Advance Tools for Daily Use</h2>
      <div className='grid grid-cols-2 justify-center items-center gap-6'>
        <div className={cardStyles}>
          <h5 className={headingStyle}>
            <span><FaCode /></span>Generate Documentation</h5>
          <p className='text-center max-md:text-left'>
            Upload your code or paste snippets
            to automatically generate
            structured and clear
            documentation, saving you
            valuable time
          </p>
        </div>
        <div className={cardStyles}>
          <h5 className={headingStyle}>
            <span><FaPenNib /></span>Generate Content</h5>
          <p>
            Upload your code or paste snippets
            to automatically generate
            structured and clear
            documentation, saving you
            valuable time
          </p>

        </div>
      </div>
    </>
  )
}

export default Tools;
