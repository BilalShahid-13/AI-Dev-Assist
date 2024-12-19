import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import InputField from '../Components/InputField';
// icons
import { MdEmail, MdOutlineLock } from "react-icons/md";
import { TbCube } from "react-icons/tb";
import { Link } from 'react-router-dom';
import GoogleAuth from '../Providers/Google/GoogleAuth';
import { validateInput } from '../../assets/Validation';

const SignupForm = () => {
  const [signup, setSignup] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState({ username: '', email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value, // Dynamically update based on input field name (username or password)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validateInput(signup);
    setError(validationResult); // Set the errors to the state

    console.log("Validation Result:", validationResult);

    if (Object.values(validationResult).some((err) => err)) {
      return;
    }
    console.log("Form submitted successfully!"); // Handle login submission (e.g., make an API call or route to another page)
  };
  return (
    <Flex display={'flex'} flexDirection={'column'} w={'100%'} h={'100%'}
      objectFit={'cover'} bgColor={'transparent'}
      justifyContent={'center'} alignItems={'center'} gap={'4vh'}>
      {/* logo */}
      <Box rounded={'15%'}
      >
        <TbCube fontSize={59} color='white' />
      </Box>
      {/* heading */}
      <Box justifyContent={'center'} alignItems={'center'}
        display={'flex'} flexDirection={'column'}>
        <Heading textColor={'white'} fontSize={{ md: '', base: '', lg: '18px' }}>Let's create your account</Heading>
        <Text textColor={'white'}
          fontSize={{ md: '', base: '', lg: '16px' }} fontWeight={'medium'}>Already have an account?&nbsp;
          <Link to='/register/login' style={{ fontWeight: 'semibold', textDecoration: 'underline' }}>Log in</Link></Text>
      </Box>
      {/* input fields */}
      <Flex justifyContent={'center'} alignItems={'center'}
        display={'flex'} flexDirection={'column'} gap={6} w={'100%'}>
        {/* input fields */}
        <InputField
          placeholder={'username'}
          type={'email'}
          Icon={MdEmail}
          color={'gray.400'}
          name={'username'} // Use "username" to map the email
          w={'80%'}
          height={'50px'}
          value={signup.username} // Bind value to login.username
          onChange={handleChange} // Handle input change
          error={error.username}
        />
        <InputField
          placeholder={'Email Address'}
          type={'email'}
          Icon={MdEmail}
          color={'gray.400'}
          name={'email'} // Use "username" to map the email
          w={'80%'}
          height={'50px'}
          value={signup.email} // Bind value to login.username
          onChange={handleChange} // Handle input change
          error={error.email}
        />
        <InputField
          placeholder={'Password'}
          type={'password'}
          Icon={MdOutlineLock}
          color={'gray.400'}
          name={'password'} // Use "password" to map the password field
          w={'80%'}
          height={'50px'}
          value={signup.password} // Bind value to login.password
          onChange={handleChange} // Handle input change
          error={error.password}
        />
        <Button fontFamily={'Montserrat'} w={{ md: '70%', lg: '40%', base: '70%' }}
          fontSize={'1.3vw'} bgColor={'#00b4d8'} py={'3.3vh'}
          _hover={{
            backgroundColor: '#0096c7'
          }}
          transition={'all ease 0.5s'}
          onClick={handleSubmit}>SignUp</Button>

      </Flex>
      {/* dividers */}
      <Flex display={'flex'} flexDirection={'row'}
        justifyContent={'center'} w={'full'}
        alignItems={'center'} color={'#737373'}>
        <Divider />
        <Text w={'full'} textAlign={'center'}>Or Authorize With</Text>
        <Divider />
      </Flex >
      {/* providers */}
      <GoogleAuth />
      {/* gogle auth gives token so we have to decode it more details on readme */}
    </Flex >
  )
}

export default SignupForm
