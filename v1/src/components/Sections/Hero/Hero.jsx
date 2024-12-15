import React from 'react'
import { Button } from 'rizzui'
import AiChatBot from './AiChatBot'
import Marquee from './Marquee'
import Integrations from './Integrations'
import Tools from './Tools'
import Documentation from './Tools/Documentation'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full text-[#f9e9d6]'>
      <div className='flex flex-col justify-center items-center gap-12  my-14 '>
        <h2 className='max-md:text-5xl text-6xl font-semibold w-[60%] text-center backdrop-blur leading-snug'>Managing your content with AI</h2>
        <h2 className='max-md:3xl text-3xl font-semibold backdrop-blur'>Supercharge Your Creativity</h2>
        <h6 className='text-2xl max-md:text-xl backdrop-blur'>Generate high-quality content and code effortlessly.</h6>
        <Button className="primary-button">Start Creating</Button>
      </div>
      <AiChatBot />
      <Marquee />
      <Integrations />
      <Tools />
      <Documentation />
    </div>
  )
}

export default Hero
