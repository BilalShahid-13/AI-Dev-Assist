import Marquee from '@/components/ui/marquee'
import { Button, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { memo, useMemo } from 'react'
import { ServicesImage } from '../../assets/Constants'
import HorizontalMarquee from '../../components/Marquee/HorizontalMarquee'
import Technologies from './components/Technologies'

const ServicesSection = () => {
  const MemoizedMarqueeCards = memo(MarqueeCard);
  const MemoizedServicesImage = useMemo(() => ServicesImage, [ServicesImage]);
  function TooltipCard({ img, index }) {
    return (
      MemoizedServicesImage.map((img, index) => (
        <Tooltip hasArrow label={img.title} key={index} bgColor={'#2c0b82'}>
          <Flex
            key={index}
            bgColor={'rgba(26, 28, 43,0.6)'}
            blur={'10px'}
            py={{ lg: '2vh', base: '2vh' }}
            px={'1vw'}
            mx={{ lg: '1vw' }}
            border={'1px solid #131224'}
            rounded={'lg'}
            _hover={{
              border: '1px solid #2c0b82',
              cursor: 'pointer'
            }}
            transition={'all ease 0.8s'}
          >
            <Image
              src={img.img}
              w={{ lg: '100%', base: '100%' }}
              h={{ lg: '10vh', base: '5vh' }}
              objectFit={'cover'}
            />
          </Flex>
        </Tooltip>
      ))

    );
  }

  function MarqueeCard() {
    return (<div className="dark relative flex
    h-auto w-full flex-col items-center
    justify-center overflow-hidden rounded-lg
    bg-[#080219] md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:70s]">
        {MemoizedServicesImage.map((img, index) => (
          <TooltipCard img={img} index={index} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:70s]">
        {MemoizedServicesImage.map((img, index) => (
          TooltipCard(img, index)
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    )
  }

  return (
    <Flex
      bgColor={'#080219'}
      borderTop={'2px solid #2c0b82 '}
      display={'flex'}
      py={'2vh'}
      flexDirection={'column'} justifyContent={'center'}
      alignItems={'center'} gap={'2vh'}
      overflow={'hidden'}
    >
      {/* services */}
      <Button bgColor={'#22284c'} textColor={'#4350a4'}
        w={'fit-content'} rounded={'full'}
        _hover={{
          bgColor: '#8445c6',
          textColor: 'white'
        }}
        py={{ lg: '3vh' }}
        fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
        transition={'all ease 0.9s'}
        fontFamily={'Montserrat'}>Services We Use</Button>
      <Text
        bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
        bgClip="text"
        fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
        fontFamily={'Montserrat'}
        flexWrap={'nowrap'}
        textAlign={'center'}
        fontfamily={'Montserrat'}>Powered by Cutting-Edge AI</Text>
      <Technologies />
      <Flex my={'2vh'}>
        <HorizontalMarquee
          marque={
            <Flex gap={'2vw'} justifyContent={'center'}
              alignItems={'center'} display={'flex'}
              flexDir={'row'} px={'2vw'}>
              {/* <MemoizedMarqueeCards /> */}
              {/* <MemoizedMarqueeCards /> */}
              <MemoizedMarqueeCards />
            </Flex>
          }
          pauseOnHover={true} />
      </Flex>
    </Flex>
  )
}

export default ServicesSection
