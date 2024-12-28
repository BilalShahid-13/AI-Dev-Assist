import React from 'react'
import Marquee from "react-fast-marquee";
const HorizontalMarquee = ({ HorizontalMarqueeRef, marque, pauseOnHover, speed }) => {

  return (
    <>
      <Marquee ref={HorizontalMarqueeRef}
        pauseOnHover={pauseOnHover}
        speed={speed}
        >
        {/* <MarqueeCards />
        <MarqueeCards /> */}
        {marque}
      </Marquee>
    </>
  )
}

export default HorizontalMarquee
