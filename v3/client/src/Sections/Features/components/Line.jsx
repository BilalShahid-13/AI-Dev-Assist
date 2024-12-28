import { Box, Divider, Flex } from '@chakra-ui/react';
import React from 'react'

const Line = ({ sliderRef }) => {
  return (
    <Flex
      position={'absolute'}
      w={'100%'}
      zIndex={20}
      bgColor={'rgba(0,0,0,0.1)'}
      h={'100%'}
      overflow={'hidden'}
      onMouseMove={(e) => {
        // console.log(e.clientX)
      }}
    >
      <Box w={'100%'} h={'100%'} bgColor={'transparent'}></Box>
      <Flex direction={'column'} justifyContent={'center'}
        alignItems={'center'} h={'100%'}
        ref={sliderRef}
      // ml={'-4vw'}
      >
        <Box w={'18px'} h={'18px'} bgColor={'white'}
          rounded={'full'} />
        <Divider
          orientation="vertical"
          borderWidth={'2px'}
          borderColor={'rgb(73, 50, 184)'}
        />
      </Flex>
      <Box w={'100%'} h={'100%'} bgColor={'rgba(18, 21, 41, 0.8)'}></Box>
    </Flex>
  );
};

export default Line
