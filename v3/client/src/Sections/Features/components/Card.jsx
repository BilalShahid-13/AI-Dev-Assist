import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react'

const Card = ({ icon, text, no, mt, ml = '2vw', w = '40%'
  , color, py = '1.5vh', ref }) => {
  return (
    <Flex
      ref={ref}
      bgColor={'rgb(48, 48, 65)'}
      // bgColor={'red'}
      textColor={'white'}
      flexDir={'row'}
      py={py}
      zIndex={10}
      position={'relative'}
      ml={ml}
      mt={mt}
      w={w}
      px={'2%'}
      rounded={'md'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={'flex'} flexDir={'row'} gap={'2vw'} alignItems={'center'}>
        <Icon as={icon} textColor={color}
          fontSize={{ lg: '30px', base: "18px" }} />
        <Text fontFamily={'Montserrat'}
          fontSize={{ lg: '20px', base: "xs" }}>{text}</Text>
      </Box>
      <Text fontFamily={'Montserrat'}
        fontSize={{ lg: '20px', base: "xs" }}>{no}</Text>
    </Flex>
  );
};

export default Card
