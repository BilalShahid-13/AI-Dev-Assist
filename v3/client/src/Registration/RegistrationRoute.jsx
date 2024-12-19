import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import SignupForm from './Signup/SignupForm';
import CustomBot from './Chatbot/CustomBot';
// import Spline from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline';
const RegistrationRoute = () => {

  const Forms = ({ Components }) => {
    return (
      <Flex
        w={{ md: '100%', lg: '40%', base: '100%' }}
        backdropFilter={'blur(10px)'}  // Apply blur effect
      >
        <Components />
      </Flex>
    )
  }

  return (
    <>
      <Flex display={'flex'} flexDirection={'row'} h={'100vh'}
        w={'100%'}
        p={2} bgColor={'rgb(15, 15, 15)'} shadow={'md'}>
        <Routes>
          <Route path='/login' element={<Forms Components={LoginForm} />} />
          <Route path='/signup' element={<Forms Components={SignupForm} />} />
        </Routes>
        <Flex w='70%'
          display={{ md: 'none', base: 'none', lg: 'flex' }}
          bgColor={'rgb(7, 7, 7)'}  // Slight background tint to see the blur effect
          backdropFilter={'blur(10px)'} rounded={'md'}
        >
          <Box w='full' bgColor={'#070707'}
          >
            <Spline style={{
              transform: 'scale(0.7)',
              marginTop: '-25vh',
            }}
              scene="https://prod.spline.design/DcGU70zzTWI1jDCb/scene.splinecode" />
          </Box>
          <CustomBot />
        </Flex>
      </Flex>
    </>
  )
}

export default RegistrationRoute;
