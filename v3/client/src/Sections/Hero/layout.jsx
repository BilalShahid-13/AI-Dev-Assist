import { Flex } from '@chakra-ui/react';
import Feature from '../Features/FeaturesSection';
import Service from '../Services/ServicesSection';
import Hero from './HeroSection';
export const layout = () => {

  return (
    <>
      <Hero />
      <Flex display={'flex'} flexDirection={'column'}
        position={'relative'} w={'full'}>
        <Feature />
        <Service />
      </Flex>
    </>
  );
};