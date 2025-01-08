import React, { memo, useMemo } from 'react'
import { MagicCard as MagicCards } from '@/components/ui/magic-card'
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { MagicCardContent } from '@/assets/Constants';
import { RiAiGenerate2 } from 'react-icons/ri';
const MagicCard = () => {
  const content = useMemo(() => MagicCardContent, [MagicCardContent]);
  function CardContent() {
    return (
      <Flex display={'flex'} flexDir={'column'}
        gap={'6px'}
        py={'2%'} px={{ lg: '4%' }}
        justifyContent={'center'} alignItems={'center'}>
        <Flex
          display={'flex'} flexDir={'column'}
          gap={'6px'}
          py={'2%'} px={{ lg: '4%' }}
          justifyContent={'center'} alignItems={'flex-start'}>
          {content.map((item, index) =>
            <Box display={'flex'} flexDir={'row'} gap={'12px'}
              justifyContent={'center'} alignItems={'center'}>
              <Icon as={item.icon} color={'#4796e4'}
                fontSize={{ lg: '3xl', base: 'xl' }} />
              <Text key={index}
                flexWrap={'nowrap'}
                fontSize={{ lg: 'md', base: 'xs' }}
                textColor={'white'}
                fontFamily={'Montserrat'}
              >{item.text}</Text>
            </Box>
          )}
        </Flex>
        {/* button */}
        <Button
          fontSize={{ lg: 'md', base: 'xs' }}
          bgColor={'transparent'}
          border={'1px solid rgb(84, 68, 149)'}
          textColor={'white'}
          _hover={{
            bgColor: '#944ad7'
          }}
          _active={{
            bgColor: '#481aad'
          }}
          leftIcon={<RiAiGenerate2 />}
          transition={'all ease 0.9s'}>Start Generating Content Now</Button>
      </Flex >
    )
  }
  return (
    <div
      className={
        "dark flex max-sm:w-full w-[40%] flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCards
        className="cursor-pointer flex-col items-center
         justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor={"#131757"}
      >
        <CardContent />
      </MagicCards>

    </div>
  );
}

export default MagicCard
