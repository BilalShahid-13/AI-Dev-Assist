import { Technologies as TechnologiesData } from '@/assets/Constants'
import OrbitingCircles from '@/components/ui/orbiting-circles'
import { Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { useMemo } from 'react';

const Technologies = () => {
  const isSm = useBreakpointValue({ base: true, lg: false });
  const memorizedTechnologies = useMemo(() => TechnologiesData, [TechnologiesData]);
  return (
    <>

      <div className="relative flex h-[900px] max-sm:h-[500px]
       w-full flex-col items-center justify-center
       overflow-hidden bg-[#080219] md:shadow-xl">
        <Text className="pointer-events-none
          whitespace-pre-wrap bg-gradient-to-b
          from-[#daddeb] to-[#c6cadf] bg-clip-text
          text-center text-8xl font-semibold
          leading-none text-transparent max-sm:text-3xl
           dark:from-white dark:to-black"
          fontFamily={'Montserrat'}>
          Contenium
        </Text>
        {/* Inner Circles */}
        {memorizedTechnologies.map((item, index) => (
          <OrbitingCircles
            className=" border-none bg-transparent flex flex-col"
            duration={15 + (index * 1)}
            delay={20 * (index + 1)}
            radius={(isSm ? 35 : 80) * (index + 1)}
            key={index}
          >
            <Image src={item.icon}
              w={{ lg: '100px', base: '50px' }}
              // w={'90px'}
              p={2} rounded={'full'}
            />
          </OrbitingCircles>
        ))}

      </div>
    </>
  )
}

export default Technologies
