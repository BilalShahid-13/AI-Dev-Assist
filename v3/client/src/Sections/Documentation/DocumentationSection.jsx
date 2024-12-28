import { Box, Button, Flex, Heading, Text, Textarea } from '@chakra-ui/react'
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
const DocumentationSection = () => {
  return (
    <>
      <Flex display={'flex'} py={'2vh'}
        flexDirection={'column'} justifyContent={'center'}
        alignItems={'center'} gap={'2vh'} mx={'1vw'}
        bgColor={'#101220'} rounded={'lg'}>
        {/* headline */}
        <Heading bgColor={'#22284c'} textColor={'#4350a4'}
          w={'fit-content'} rounded={'full'}
          _hover={{
            bgColor: '#8445c6',
            textColor: 'white'
          }}
          py={{ lg: '1vh', base: '1vh' }}
          px={{ lg: '2vw', base: '3vw' }}
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          transition={'all ease 0.9s'}
          fontFamily={'Montserrat'}>Code to Documentation</Heading>
        {/* title */}
        <Text
          bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
          bgClip="text"
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          fontFamily={'Montserrat'}
          flexWrap={'nowrap'}
          textAlign={'center'}
          fontfamily={'Montserrat'}>
          Effortless Code Documentation
        </Text>
        {/* desc */}
        <Text
          bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
          bgClip="text"
          fontSize={{ md: 'xl', lg: 'md', base: 'sm' }}
          fontFamily={'Montserrat'}
          flexWrap={'nowrap'}
          textAlign={'center'}
          fontfamily={'Montserrat'}>
          Say goodbye to tedious documentation tasks,Our AI-powered tool
          instantly converts your code snippets into clear, concise,
          and professional documentation,Generate API references, function
          descriptions, and user guides with ease.
        </Text>
        <Grid templateColumns={{
          lg: 'repeat(3, 1fr)',
          base: 'repeat(1,1fr)'
        }}
        //  gap={6}
        >
          <GridItem w='100%'>
            <Box
              bgColor={'rgba(22, 18, 57,0.7)'}
              border="2px solid rgb(28, 25, 112)"  // Adds a border to the Box
              borderRadius="8px"         // Optional: Makes the corners rounded
              p="3"
              w={'50vw'}
              h={'100%'}            // Padding inside the Box
              blur={'10px'}
            >
              <Textarea
                bgColor="#181c36"
                height="100%"            // Increases the height of the Textarea
                width="100%"
                objectFit={'cover'}            // Ensures it stretches to the full width of the Box
                textColor="white"
                fontSize={{ lg: '13px' }}
                _placeholder={{
                  fontFamily: 'Montserrat'
                }}
                placeholder="Enter your code here"
                size="md"               // Adjust size if needed
              />
            </Box>

          </GridItem>

          <GridItem w='100%'>
            <Box
              bgColor={'rgba(22, 18, 57,0.7)'}
              border="2px solid rgb(12, 10, 61)"  // Adds a border to the Box
              borderRadius="8px"         // Optional: Makes the corners rounded
              p="4"                      // Padding inside the Box
              blur={'10px'}
            >
              <Textarea
                bgColor="#181c36"
                height="30vh"            // Increases the height of the Textarea
                width="100%"             // Ensures it stretches to the full width of the Box
                textColor="white"
                placeholder="Here is a sample placeholder"
                size="md"               // Adjust size if needed
              />
            </Box>

          </GridItem>
          <GridItem w='20%'>
            <Box
              bgColor={'rgba(22, 18, 57,0.7)'}
              border="2px solid rgb(12, 10, 61)"  // Adds a border to the Box
              borderRadius="8px"         // Optional: Makes the corners rounded
              p="4"                      // Padding inside the Box
              blur={'10px'}
            >

            </Box>

          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default DocumentationSection
