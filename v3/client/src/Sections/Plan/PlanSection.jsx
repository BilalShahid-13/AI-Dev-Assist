import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import MagicCard from './components/MagicCard';
const PlanSection = () => {
  return (
    <>
      {/* Get Started for Free */}
      <Flex
        bgColor={'#080219'}
        display={'flex'} py={'2vh'}
        flexDirection={'column'} justifyContent={'center'}
        alignItems={'center'} gap={'2vh'}
        position={'relative'}>
        <Button bgColor={'#22284c'} textColor={'#4350a4'}
          w={'fit-content'} rounded={'full'}
          _hover={{
            bgColor: '#8445c6',
            textColor: 'white'
          }}
          py={{ lg: '3vh' }}
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          transition={'all ease 0.9s'}
          fontFamily={'Montserrat'}>Get Started for Free</Button>
        <Text
          textColor={'gray.100'}
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          fontFamily={'Montserrat'}
          flexWrap={'nowrap'}
          px={{ base: '1.5vw' }}
          textAlign={'center'}
          fontfamily={'Montserrat'}>
          Unlock your creativity with our
          free AI content generation tool
        </Text>
        {/* plan card */}
        <MagicCard />
      </Flex>
    </>
  )
}

export default PlanSection
