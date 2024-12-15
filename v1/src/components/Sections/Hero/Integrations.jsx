import React from 'react'
import { IntegrationsLists } from '../../../Constant'
import { Tooltip } from 'rizzui'

const Integrations = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6 py-5'>
        <h2 className='max-md:text-2xl text-5xl font-semibold'>Integrations and Extensibility</h2>
        <p className='text-center max-md:w-[70%] w-[70%] leading-relaxed text-xl backdrop-blur-sm '>Present a visual grid or list of primary features,
          including Gemini API, Grammarly integration, SEO
          tools, and a plagiarism remover. Use simple icons
          or illustrations to make it engaging and visually
          accessible.</p>
        <div className='grid grid-cols-4 gap-4 space-y-2 justify-center items-center leading-loose text-center'>
          {IntegrationsLists.map((item, index) => (
            <Tooltip key={index} content={item.title} color='bg-zinc-300'
              className='bg-zinc-300'>
              <div className='flex flex-col justify-center items-center
               rounded-full
                drop-shadow-2xl
                 backdrop-blur-0'>
                <img src={item.src} alt={item.title}
                  className='h-12
                  max-md:h-8 drop-shadow-2xl' />
                <p>{item.title}</p>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </>
  )
  //  max-md:w-20 max-md:h-20 w-32 h-32
}

export default Integrations
