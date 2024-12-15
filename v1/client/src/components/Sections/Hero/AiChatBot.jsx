import React, { useState } from 'react'
import { Button, Tooltip } from 'rizzui'
import { Chatbot } from '../../../Constant'

const AiChatBot = () => {
  const [tabSelected, setTabSelected] = useState(0)
  return (
    <>
      {/* chatbot */}
      <div className='flex justify-center items-center '>
        <div className='flex flex-col justify-center gap-3 pb-3 rounded-xl
         items-center bg-[#212021] max-md:w-[100%] w-[100%] backdrop-blur-sm border-none'>
          {/* tabs */}
          <div className='flex justify-center items-center border-l-none border-r-none border-t-none border-b-[1px] border-b-slate-400 w-full outline-none'>
            {Chatbot[0].tabs.map((items, index) => (
              <div className='flex flex-row justify-center items-center' key={index}>
                <Button className={`flex gap-3 hover:bg-zinc-800
                rounded-t-md transition-all ease-linear duration-200 ${tabSelected === index ? 'border-b-[2px] border-b-blue-400' : ''}`} rounded='none'
                  onClick={() => setTabSelected(index)}
                  onBlur={() => setTabSelected(null)}>
                  <img src={items.src} alt={items.title}
                    className='w-6 h-6 max-md:w-4' />
                  <p key={index} className='font-medium'>{items.title}</p>
                </Button>
              </div>
            ))}
          </div>
          {/* textarea */}
          <div>
            <textarea
              className='rounded bg-[#181717]
              backdrop-blur-sm max-md:w-[70vw] w-[40vw] max-lg:mx-3
               outline-none h-[30vh] p-2 mx-2'
              placeholder='add content' />
          </div>
          {/* footer */}
          <div className="flex flex-row justify-center items-center gap-56">
            {/* Left: Icons */}
            <div className="flex flex-row justify-center items-center gap-4">
              {Chatbot[1].footer.map((items, index) => (
                <Tooltip key={index} content={items.title}
                  className='bg-blue-500 text-white transition-all ease-linear duration-150'>
                  <button key={index}>
                    <img
                      src={items.src}
                      alt={items.title}
                      className="w-6 h-6 max-md:w-4"
                    />
                  </button>
                </Tooltip>
              ))}
            </div>

            {/* Right: Generate Text button */}
            <div>
              <Button className="bg-[#f9e9d6] hover:bg-[#dbcbb8] text-zinc-700 transition-all ease-linear duration-200 shadow-sm hover:shadow-slate-500 gap-3">
                <img src="/icons/Chatbot/magic-wand-svgrepo-com.svg" alt="generate img"
                  className='w-6 h-6 max-md:w-4' />
                <p>Generate Text</p>
              </Button>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default AiChatBot
