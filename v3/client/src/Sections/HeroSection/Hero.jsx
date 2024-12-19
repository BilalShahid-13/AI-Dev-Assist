import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import { Box, Button, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import VerticleMarquee from '../../Components/Marquee/VerticleMarquee';
import { Canvas } from '@react-three/fiber';
import Cube from '../../Registration/Components/Cube';
import AnimatedBoxes from './components/AnimatedBoxex';
import HorizontalMarquee from '../../Components/Marquee/HorizontalMarquee';
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { ProductAnimation } from '../../Animations/Hero/ProductAnimation';
import { VerticalMarqueAnimation } from '../../Animations/Hero/VerticalMarqueAnimation';
import ContentAnimation from '../../Animations/Hero/ContentAnimation';
import gsap from 'gsap';
import { HorizontalAnimation } from '../../Animations/Hero/HorizontalAnimation';
const Hero = () => {

  // lear more ref
  const productRef = useRef();
  const productDesRef = useRef();
  const productBtnRef = useRef();
  const productAnimatedBoxRef = useRef();
  // verticle marquee && horizontal
  const VerticalMarqueeRef = useRef();
  const HorizontalMarqueeRef = useRef();

  // content section ref
  const headlineRef = useRef();
  const descriptionRef = useRef();
  const btnRef = useRef()
  const isMobileView = useBreakpointValue({ base: true, lg: false, md: false }, { ssr: false })
  useEffect(() => {
    const timeline = gsap.timeline()
    !isMobileView && ProductAnimation(timeline, productRef, productDesRef, productBtnRef, productAnimatedBoxRef);
    !isMobileView && VerticalMarqueAnimation(timeline, VerticalMarqueeRef);
    isMobileView && HorizontalAnimation(timeline, HorizontalMarqueeRef);
    ContentAnimation(timeline, headlineRef, descriptionRef, btnRef)
  }, [])


  return (
    <>
      <Flex
        position="absolute"
        zIndex={-1}
        bgColor="#070707"
        top={0}
        left={0}
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Spline
          scene="https://prod.spline.design/DOhqooabx-5xIOp3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* <img src='image.png'/> */}
      </Flex>
      <Flex display={'flex'}
        flexDirection={{ md: 'row', lg: 'row', base: 'column' }}
        h={'100%'} position="relative"
        fontFamily={'Montserrat'}
        gap={'3vh'}
        py={{ base: '2vh' }}
      >
        {/* product support */}
        <Flex display={{ md: 'flex', lg: 'flex', base: 'none' }} flexDir={'column'}
          justifyContent={'space-between'} alignItems={'center'}
          ref={productRef}>
          <Flex display={'flex'} flexDir={'column'} mt={'2vh'}
            justifyContent={'center'} alignItems={'center'} gap={'2vh'}>
            <Text bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
              bgClip="text" flexWrap={'nowrap'}
              fontSize={{ md: '13px', lg: '14px', base: '' }}>Product Support</Text>
            {/* circles */}
            <AnimatedBoxes
              w={{ md: '10px', lg: '12px', base: '12px' }}
              ref={productAnimatedBoxRef} />
            <Button fontSize={{ md: '12px', lg: '12px' }}
              ref={productBtnRef}
              bgColor={'transparent'} border={'1px solid rgb(84, 68, 149)'}
              textColor={'white'}
              rounded={'full'}
              _hover={{
                bgColor: '#8445c6'
              }}
              transition={'all ease 0.9s'}>Learn More</Button>
          </Flex>
          <Flex ref={productDesRef}>
            <Text bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
              bgClip="text" flexWrap={'nowrap'} textAlign={'center'}
              fontSize={{ md: '12px', lg: '12px', base: '' }}>Pioneers of the future of technology</Text>
          </Flex>
        </Flex>
        {/* Marquee Section */}
        <Flex
          h={'80%'}
          display={{ md: 'flex', lg: 'flex', base: 'none' }}
          w={{ lg: '20%', md: '30%' }}
          ref={VerticalMarqueeRef}
          alignItems={'center'}  // Vertically align the marquee content
        >
          <VerticleMarquee
          // ref={VerticalMarqueeRef}
          />
        </Flex>

        {/* Content Section */}
        <Flex
          display={'flex'}
          flexDirection={'column'}
          gap={'4vh'}
          mt={{ lg: '14vh', md: '14vh' }}
          justifyContent={'flex-start'}
          alignItems={'center'}
          w={'100%'}// Adjust this to align the content vertically
        >
          {/* headline */}
          <Box
            display="flex"
            justifyContent="center" alignItems="center"
            flexDirection={{ md: 'column', base: 'column', lg: 'row' }}
            gap={{ lg: '2vw' }} ref={headlineRef}>
            <Box w={{ lg: '10%', md: 'full', base: 'full' }}>
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Cube />
              </Canvas>
            </Box>
            <Heading
              bgGradient="linear(to-b, #e9ebf4, #babfd8)"
              fontFamily={'Montserrat'}
              bgClip="text"
              flexWrap={'nowrap'}
              textAlign={'center'}
              fontSize={{ md: '2xl', lg: '4xl', base: 'lg' }}
              w={'full'}
            >
              Revolutionize Your Content Creation
            </Heading>
          </Box>
          {/* description */}
          <Text
            bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
            bgClip="text"
            fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
            fontFamily={'Montserrat'}
            flexWrap={'nowrap'}
            textAlign={'center'}
            w={{ base: '70%' }}
            ref={descriptionRef}
          >
            AI-Powered Tools for Developers and Content Creators
          </Text>
          {/* buttons */}
          <Flex justifyContent={'center'} alignItems={'center'}
            direction={{ md: 'column', lg: 'column', base: 'column' }}
            fontFamily={'Montserrat'} gap={'2vw'} ref={btnRef}>
            <Button
              bgColor="white"
              rounded="full"
              gap={'1vw'}
              w={{ base: '100%' }}
              px={{ md: '3vw', lg: '3vw', base: '4vw' }}
              py={{ md: '2vh', lg: '3.5vh' }}
              fontSize={{ md: 'xl', lg: 'lg', base: 'sm' }}
              boxShadow="0px 4px 20px #150d2e"  // Custom shadow color with RGBA format
            >
              Get Started
              <HiOutlineArrowDownRight />
            </Button>
            <Button
              fontSize={{ md: 'md', lg: 'xl', base: 'sm' }}
              bgColor={'transparent'}
              border={'1px solid rgb(84, 68, 149)'}
              textColor={'white'}
              rounded={'full'}
              _hover={{
                bgColor: '#8445c6'
              }}
              w={{ base: '100%', lg: '100%' }}
              px={{ md: '3vw', lg: '3vw', base: '4vw' }}
              py={{ md: '3vh', lg: '3.5vh' }}
              transition={'all ease 0.9s'}>Our Methodology</Button>
            <Button
              fontSize={{ md: 'md', lg: 'lg', base: 'sm' }}
              bgColor={'transparent'} border={'1px solid rgb(84, 68, 149)'}
              textColor={'white'}
              rounded={'full'}
              _hover={{
                bgColor: '#8445c6'
              }}
              w={{ base: '100%' }}
              display={{ md: 'none', lg: 'none' }}
              transition={'all ease 0.9s'}>Learn More</Button>
          </Flex>
        </Flex>

        {/* marquee for mobile screen */}
        <Flex
          display={{ md: 'none', base: 'flex', lg: 'none' }}
          h={'100%'}
          w={{ lg: '20%', md: '30%', base: '100%' }}
          alignItems={'center'}  // Vertically align the marquee content
          ref={HorizontalMarqueeRef}
        >
          <HorizontalMarquee />
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
