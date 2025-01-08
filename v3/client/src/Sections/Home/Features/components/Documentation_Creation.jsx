import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { MdDisplaySettings, MdOutlineTextFields } from 'react-icons/md';
import { TbBoxModel } from 'react-icons/tb';
import { Features } from '../../../../assets/Constants';
import Card from './Card';
import Line from './Line';
import { useNavigate } from 'react-router-dom';
const Documentation_Creation = () => {
  const cardRef = useRef();
  const boxRef = useRef()
  const sliderRef = useRef();
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0 });
  useEffect(() => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderX = sliderRect.left;
    setCursorPosition({ x: sliderX })
  }, []);

  const handleMouseMove = (e) => {
    // cursor: col-resize
    const x = e.clientX;
    const sliderWidth = x - cursorPosition.x;
    if (boxRef.current) {
      boxRef.current.style.cursor = "col-resize";
    }
    gsap.to(sliderRef.current, {
      x: (sliderWidth > -250 && sliderWidth < 250) && sliderWidth,
      duration: 0.3, // Short duration for smooth tracking
      ease: 'power2.out', // Smooth easing for the movement
    });
  };

  const cursorLeave = () => {
    gsap.to(sliderRef.current, {
      x: cursorPosition,
      duration: 0.7,
      ease: 'elastic',
    });
  }
  return (
    <>
      <Flex position={'relative'}
        ref={boxRef}
        bgColor={'#161a33'}
        border={'1px solid rgb(30, 33, 52)'}
        rounded={'lg'}
        onMouseMove={handleMouseMove}
        onMouseLeave={cursorLeave}
        justifyContent={'space-between'}
        h={{ lg: '75vh', base: 'auto' }}
        boxShadow={'0px 0px 8px 0px #27293c'}
        flexDir={'column'} w={{ lg: '40%', base: '90%' }}>
        {/* Cards Section */}
        <Box display={'flex'} flexDir={'column'}
          justifyContent={'center'} alignItems={'flex-start'}
          mt={{ lg: '7%' }}
          gap={{ lg: '7vh', base: "2vh" }} py={'2vh'} ref={cardRef}>
          <Card
            text={'Code Input'}
            no={'01'}
            color={'red.500'}
            w={{ lg: '70%', base: '80%' }}
            py={{ lg: '2.5%', base: '2%' }}
            ml={'15%'}
            icon={MdOutlineTextFields}
          />
          <Card
            text={'NLP'}
            no={'02'}
            color={'yellow.400'}
            w={'60%'}
            py={{ lg: '2.5%', base: '2%' }}
            ml={'10%'}
            icon={TbBoxModel}
          />
          <Card
            text={'Output'}
            no={'03'}
            color={'green.400'}
            w={'80%'}
            py={{ lg: '2.5%', base: '2%' }}
            ml={'5%'}
            icon={MdDisplaySettings}
          />
        </Box>

        {/* Line Component */}
        <Line sliderRef={sliderRef} />

        {/* Features Section */}
        <Flex
          direction={'column'}
          bgColor={'#161a33'}
          zIndex={20}
          position={'relative'}
          border={'1px solid #333'}
          roundedBottom={'md'}
          p={'3%'}
          gap={'1vh'}
        >
          <Box display={'flex'} flexDir={'row'} gap={'2%'}
            justifyContent={'flex-start'} alignItems={'center'}>
            <Box bgColor={'rgba(60, 28, 189,0.9)'} blur={'20px'}
              justifyContent={'center'} alignItems={'center'}
              w={'fit-content'}
              p={{ lg: '1.5vh', base: '0.8vh' }} rounded={'md'}>
              <Icon as={Features[0].icon}
                fontSize={{ lg: '20px', base: '20px' }}
                color={'white'} />
            </Box>
            <Heading fontWeight={'medium'} bgColor={'#161a33'}
              textColor={'gray.300'}
              fontFamily={'Montserrat'}
              _hover={{
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
              onClick={() => {
                console.log('click')
                navigate('/documentation')
              }}
              fontSize={{ lg: 'xl', base: 'md' }}>
              {Features[0].title}
            </Heading>
          </Box>
          <Text
            bgColor={'#161a33'}
            fontWeight={'medium'}
            textColor={'rgb(96, 98, 115)'}
            fontSize={{ lg: 'md', base: 'xs' }}
            fontFamily={'Montserrat'}
          >
            {Features[0].description}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Documentation_Creation;
