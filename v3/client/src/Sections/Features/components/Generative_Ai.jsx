import { Box, Button, Divider, Flex, Heading, Icon, Image, Spinner, Text, Textarea } from '@chakra-ui/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { BsImages } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { Generative_Ai_Animation } from '../../../Animations/Features/Generative_Ai_Animation';
import { Features } from '../../../assets/Constants';
const Generative_Ai = () => {
  const inputRef = useRef(null);
  const dividersRef = useRef(null);
  const ImageRef = useRef(null);
  const textAreaRef = useRef(null);
  const cardTitle = useRef(null);
  const submitBtnRef = useRef(null)
  const spinnerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    handleAnimation();
  }, [])

  function handleAnimation() {
    const textValue = 'a photo of an astronaut riding a horse on mars.';
    const timeline = gsap.timeline()
    Generative_Ai_Animation(
      dividersRef,
      ImageRef,
      textAreaRef,
      cardTitle,
      inputRef,
      textValue,
      setIsLoading, spinnerRef, submitBtnRef
    )
  }
  function Card() {
    return (
      <Flex justifyContent={'center'} alignItems={'center'}
        display={'flex'} flexDir={'column'}
        justifyItems={'center'} alignContent={'center'}>
        <Flex display={'flex'} bgColor={'#2a2c3e'}
          w={{ lg: '70%', base: '90%' }} py={'2%'} rounded={'md'}
          flexDir={'column'} justifyContent={'center'}
          alignItems={'center'}>
          {/* #1f2032 */}
          <Box bgColor={'#1f2032'} w={{ lg: '95%', base: '95%' }}
            px={'6%'} py={'6%'} rounded={'md'}
            gap={{ lg: '1vh', base: '1vh' }}
            display={'flex'} flexDir={'column'}
          >
            {/* text */}
            <Flex display={'flex'} ref={cardTitle}
              justifyContent={'space-between'}
              alignItems={'center'} gap={'5%'}>
              <Box display={'flex'} flexDir={'row'} gap={'2'}
                justifyContent={'center'} alignItems={'center'}>
                <Icon as={BsImages} color='white' rounded={'md'}
                  bgColor={'#0f1121'} p={'2'} fontSize={'30px'} />
                <Heading fontSize={{ lg: 'md', base: 'xs' }}
                  textColor={'#cbd5df'} fontFamily={'Montserrat'}
                >Image Generation</Heading>
              </Box>
              <Icon as={IoIosClose} color='white'
                fontSize={{ lg: '20px', base: 'md' }} />
            </Flex>
            {/* textarea */}
            <Box ref={textAreaRef}
              bgColor={'#151824'} h={{ lg: 'auto' }} boxShadow={'md'}
              border={'2px'} borderColor={'gray.700'} rounded={'md'}
              display={'flex'} flexDir={'column'}
              justifyContent={'space-between'} alignItems={'center'}>
              <Textarea border={'none'}
                ref={inputRef}
                textColor={'#cbd5df'}
                rows={2}
                _focus={{ border: 'none' }}
                fontFamily={'Montserrat'}
                fontSize={{ lg: 'sm', base: "smaller" }}
                placeholder='Enter your prompt'
                _active={{
                  border: 'none'
                }}
              />
              {/* buttons */}
              <Box display={'flex'} flexDir={'row'}
                w={'100%'} justifyContent={'space-between'}
                alignItems={'center'} px={'4%'} py={'2%'}>
                <Button
                  leftIcon={
                    <Icon as={GrAttachment} color="white" />
                  }
                  // bgColor="#2a2c3e"
                  border={'none'}
                  variant='outline'
                  textColor="white"
                  fontSize={{ lg: 'xs', base: '10px' }}
                  paddingRight={1}
                  paddingLeft={3}
                />
                <Button
                  ref={submitBtnRef}
                  leftIcon={
                    !isLoading ? <Icon as={IoSend} color="white" /> :
                      <Spinner />
                  }
                  border={'none'}
                  variant='outline'
                  textColor="white"
                  fontSize={{ lg: 'xs', base: '10px' }}
                  paddingRight={1}
                  paddingLeft={3}
                />
                <Spinner ref={spinnerRef} textColor="white"
                  fontSize={{ lg: 'xs', base: '10px' }}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
        <Generative_Image />
      </Flex >
    )
  }

  function Generative_Image() {
    // #3d2f86
    return (
      <Flex display={'flex'} flexDir={'column'}
        justifyContent={'center'} alignItems={'center'}
      // marginBottom={'30vh'}
      >
        {/* //  dividers */}
        <Flex justifyContent={'center'} alignItems={'center'}
          gap={'12px'} ref={dividersRef}>
          {[...Array(3)].map((key) => <Divider orientation="vertical"
            borderWidth={{ lg: '2px', base: '1px' }}
            h={{ lg: '8vh', base: '8vh' }} key={key}
            rounded={'full'} borderColor={'#3d2f86'} />)}
        </Flex>
        {/* image */}
        <Image
          ref={ImageRef}
          src={'hero-marquee/1.png'}
          shadow={'2xl'}
          w={{ lg: '90px', base: '90px' }}
          h={{ lg: '90px', base: '90px' }}
          p={'1px'} border={'2px solid #3d2f86'} rounded={'md'} />
      </Flex>
    )
  }

  return (
    <>
      <Flex position={'relative'}
        bgColor={'rgb(22, 26, 51,0.8)'}
        border={'1px solid rgb(30, 33, 52)'}
        rounded={'lg'}
        h={'100%'}
        boxShadow={'0px 0px 8px 0px #27293c'}
        flexDir={'column'} w={{ lg: '40%', base: '90%' }}>
        <Box display={'flex'} flexDir={'column'}
          gap={'3%'} py={'2%'} >
          <Card />
        </Box>
        {/* bottom */}
        <Flex
          direction={'column'}
          bgColor={'#161a33'}
          zIndex={20}
          border={'1px solid #333'}
          roundedBottom={'md'}
          p={'3%'}
          gap={'1vh'}
        >
          <Box display={'flex'} flexDir={'row'} gap={'2%'}
            justifyContent={'flex-start'} alignItems={'center'}>
            <Box bgColor={'rgba(60, 28, 189,0.9)'} blur={'20px'}
              justifyContent={'centerF'} alignItems={'center'}
              w={'fit-content'}
              p={{ lg: '1.5vh', base: '0.8vh' }} rounded={'md'}>
              <Icon as={Features[1].icon}
                fontSize={{ lg: '20px', base: '20px' }}
                color={'white'} />
            </Box>
            <Heading fontWeight={'medium'} bgColor={'#161a33'}
              textColor={'gray.300'}
              fontFamily={'Montserrat'}
              fontSize={{ lg: 'xl', base: 'md' }}>
              {Features[1].title}
            </Heading>
          </Box>
          <Text
            bgColor={'#161a33'}
            fontWeight={'medium'}
            textColor={'rgb(96, 98, 115)'}
            fontSize={{ lg: 'md', base: 'xs' }}
            fontFamily={'Montserrat'}
          >
            {Features[1].description}
          </Text>
        </Flex>
      </Flex >
    </>
  )
}

export default Generative_Ai
