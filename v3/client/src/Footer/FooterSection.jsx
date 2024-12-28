import { Box, Divider, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import Particles from '@/components/ui/particles'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export const FooterSection = () => {
  function Footer() {
    return (
      <Box
        textColor={'whitesmoke'}
        fontFamily={'Montserrat'}
      >
        <Divider orientation='horizontal' borderColor={'gray.600'} />
        <Flex flexDirection={{ lg: 'row', base: 'column' }}
          display={'flex'} px={'1vw'} py={'1vh'}
          justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={{ base: 'xs', lg: '14px' }}>
            &copy; 2024 Contenium . All Rights Reserved.
          </Text>
          <Box flexDirection={'row'} display={'flex'}
            justifyContent={'center'} alignItems={'center'}
            gap={'7px'}>
            <Text
              fontSize={{ base: 'xs', lg: '14px' }}>
              Privacy Policy
            </Text>
            <Divider orientation='vertical'
              borderWidth={{ base: '1px' }}
              rounded={'full'}
              borderColor={'gray.500'} h={'5'} />
            <Text
              fontSize={{ base: 'xs', lg: '14px' }}>
              Terms of Service
            </Text>
          </Box>
        </Flex>
      </Box>
    )
  }
  return (
    <>
      <div className="dark relative flex w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <Flex direction={'column'} bgColor={'transparent'} zIndex={10} w={'full'}>
          <Grid
            borderTop={'1px solid #260970'}
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
            p={{ lg: '1vw', base: '3vw' }} gap={'2vw'}
          >
            {/* contenium */}
            <GridItem alignItems="flex-start"
              justifyContent={{ base: 'flex-start' }}
              display={'flex'}
              flexDir={{ md: 'row', base: 'column', lg: 'column' }}
              w={{ base: '90%', lg: 'full' }}
              gap={'0.7vw'}>
              {/* favicon logo */}
              <Flex alignItems="center"
                gap={{ lg: '0.4vw', base: '0.7vw' }}
                justifyContent={{ base: 'center' }}
                display={'flex'}
                flexDir={{ md: 'row', base: 'row', lg: 'row' }}>
                <Flex
                  w={{ lg: '2vw', base: '3vw' }}
                  filter='drop-shadow(0px 0px 50px 20px rgba(255, 255, 255, 1))'
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'drop-shadow(0px 0px 50px 20px rgba(255, 255, 255, 1))',

                    }}
                  >
                    <path d="M12.122,0,1.622,6V18l10.5,6,10.5-6V6Zm7.513,6.6-7.623,4.252L4.673,6.56,12.122,2.3ZM3.622,8.262,11,12.574v8.482L3.622,16.839ZM13,21.194V12.587l7.622-4.251v8.5Z" />
                  </svg>

                </Flex>
                <Heading
                  fontFamily={'Montserrat'}
                  textColor={'#f6f7f8'}
                  fontSize={{ lg: 'lg', base: 'md' }}
                >
                  Contenium
                </Heading>
              </Flex>
              <Text fontSize={{ md: '', lg: 'lg', base: 'md' }}
                textColor={'gray.600'}>
                AI-Powered Tools for Developers and Content Creators
              </Text>
            </GridItem >
            {/* solution */}
            < GridItem
              display={'flex'} flexDirection={'column'}
              justifyContent={'center'} alignItems={'flex-start'}
              gap={'0.7vw'}
              fontFamily={'Montserrat'} >
              <Heading
                textColor={'#f6f7f8'}
                fontSize={{ md: '', lg: 'lg', base: 'md' }}
              >Solutions</Heading>
              <ChakraLink as={Link} textColor={'gray.500'}
                fontSize={{ md: '', lg: 'md', base: 'sm' }}>Generate Documentation</ChakraLink>
              <ChakraLink as={Link} textColor={'gray.500'}
                fontSize={{ md: '', lg: 'md', base: 'sm' }}>Generate Content</ChakraLink>
            </ GridItem>
            {/* company */}
            <GridItem
              display={'flex'} flexDirection={'column'}
              justifyContent={'center'} alignItems={'flex-start'}
              gap={'0.7vw'}
              fontFamily={'Montserrat'}>
              <Heading
                textColor={'#f6f7f8'}
                fontSize={{ md: '', lg: 'lg', base: 'md' }}
              >Contenium</Heading>
              <ChakraLink as={Link} textColor={'gray.500'}
                fontSize={{ md: '', lg: 'md', base: 'sm' }}>Home</ChakraLink>
              <ChakraLink as={Link} textColor={'gray.500'}
                fontSize={{ md: '', lg: 'md', base: 'sm' }}>About</ChakraLink>
              <ChakraLink as={Link} textColor={'gray.500'}
                fontSize={{ md: '', lg: 'md', base: 'sm' }}>Features</ChakraLink>
            </GridItem>
          </Grid >
          <Footer />
        </Flex>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

    </>
  )
}
