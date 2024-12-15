import React from 'react'
import MarqueeComponent from 'react-fast-marquee';
import { MarqueeItems } from '../../../Constant';
import { Tooltip } from 'rizzui';
const Marquee = () => {
  const Card = () => (
    <div className="flex justify-center items-center flex-row
     text-white m-4 p-4 rounded max-md:shadow-md
     mx-2 max-md:gap-4 gap-12
     backdrop-blur-sm bg-zinc-900">
      {MarqueeItems.map((item, index) => (
        <Tooltip key={index} content={item.title} className='bg-slate-200'>
          <img src={item.src} alt={item.title}
            className='img' />
        </Tooltip>
      ))}
    </div>
  );
  return (
    <>
      <div className="my-6">
        <h3 className='text-center font-semibold text-3xl
        max-md:text-2xl text-[#f9e9d6]'>We partner with the world's best</h3>
        <MarqueeComponent pauseOnHover speed={50}>
          <Card />
          <Card />
        </MarqueeComponent>
      </div>
    </>
  )
}

export default Marquee
