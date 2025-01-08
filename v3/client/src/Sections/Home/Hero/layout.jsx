import { Flex } from '@chakra-ui/react';
import { index as Features } from '../Features/index';
import PlanSection from '../Plan/PlanSection';
import ServicesSection from '../Services/ServicesSection';
import Hero from './HeroSection';
export const layout = () => {

  return (
    <>
      <Hero />
      <Flex display={'flex'} flexDirection={'column'}
        position={'relative'} w={'full'}>
        <Features />
        <ServicesSection />
        <PlanSection />
      </Flex>

    </>
  );
};