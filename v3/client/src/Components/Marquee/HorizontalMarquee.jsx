import React from 'react'
import Marquee from "react-fast-marquee";
import Cards from '../Cards';
import { HeroImages } from '../../assets/Constants';
import { Flex } from '@chakra-ui/react';
const HorizontalMarquee = ({ HorizontalMarqueeRef }) => {

  function MarqueeCards() {
    return (
      <Flex gap={'2vw'}>
        {HeroImages.map((img, index) => (
          <Cards key={index} img={img} w={'120px'} />
        ))}
      </Flex>
    )
  }
  return (
    <>
      <Marquee ref={HorizontalMarqueeRef}>
        <MarqueeCards />
        <MarqueeCards />
      </Marquee>
    </>
  )
}

export default HorizontalMarquee
