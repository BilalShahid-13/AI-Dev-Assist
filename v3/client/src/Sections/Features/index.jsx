import Ripple from '@/components/ui/ripple'
import { Flex } from '@chakra-ui/react'
import FeaturesSection from './FeaturesSection'

export const index = () => {
  return (
    <>
      <div className="dark relative flex  w-full
      flex-col items-center justify-center overflow-hidden
      bg-[#070707] md:shadow-xl">
        <Flex zIndex={0}>
          <FeaturesSection />
        </Flex>
        <Ripple
          mainCircleSize={100}
          mainCircleOpacity={0.2}
          numCircles={6}
        />
      </div>
    </>
  )
}
