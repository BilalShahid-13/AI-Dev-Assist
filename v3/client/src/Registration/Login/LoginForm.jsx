import { Box, Button, Divider, Flex, FormControl, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import InputField from '../Components/InputField';
// icons
import { MdEmail, MdOutlineLock } from "react-icons/md";
import { TbCube } from "react-icons/tb";
import { Link } from 'react-router-dom';
import GoogleAuth from '../Providers/Google/GoogleAuth';
import { validateInput } from '../../assets/Validation';

const LoginForm = () => {
  // State to hold username (email) and password
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  // Handle change for both input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value, // Dynamically update based on input field name (username or password)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validateInput(login);
    setError(validationResult); // Set the errors to the state

    console.log("Validation Result:", validationResult);

    if (Object.values(validationResult).some((err) => err)) {
      return;
    }

    console.log("Form submitted successfully!"); // Handle login submission (e.g., make an API call or route to another page)
  };

  return (
    <>
      <Flex display={'flex'} flexDirection={'column'} w={'100%'} h={'100%'}
        objectFit={'cover'} bgColor={'transparent'}
        justifyContent={'center'} alignItems={'center'} gap={'4vh'}>

        {/* Logo */}
        <Box rounded={'15%'} display="flex" justifyContent="center" alignItems="center">
          <TbCube fontSize={59} color="white" />
        </Box>

        {/* Heading */}
        <Box justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
          <Heading textColor={'white'} fontSize={{ md: '', base: '', lg: '18px' }}>
            Welcome Back
          </Heading>
          <Text textColor={'white'} fontSize={{ md: '', base: '', lg: '16px' }} fontWeight={'medium'}>
            Don't have an account yet?{' '}
            <Link to='/register/signup'
              style={{ fontWeight: 'semibold', textDecoration: 'underline' }}>
              SignUp
            </Link>
          </Text>
        </Box>

        {/* Input Fields */}
        <FormControl justifyContent={'center'} alignItems={'center'}
          fontFamily={'fonts.heading'} display={'flex'} flexDirection={'column'} gap={6} w={'100%'}>

          <InputField
            placeholder={'Email Address'}
            type={'email'}
            Icon={MdEmail}
            color={'gray'}
            name={'email'} // Use "username" to map the email
            w={'80%'}
            height={'50px'}
            value={login.email} // Bind value to login.username
            onChange={handleChange} // Handle input change
            error={error.email}
          />

          <InputField
            placeholder={'Password'}
            type={'password'}
            Icon={MdOutlineLock}
            color={'gray'}
            name={'password'} // Use "password" to map the password field
            w={'80%'}
            height={'50px'}
            value={login.password} // Bind value to login.password
            onChange={handleChange} // Handle input change
            error={error.password}
          />

          {/* Forgot password text */}
          <Text w={'80%'} textAlign={'right'} color={'gray.500'}
            fontSize={{ md: '2vw', lg: '1vw', base: '3vw' }}
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            transition={'all ease 0.5s'}>
            Forgot Password
          </Text>

          {/* Submit button */}
          <Button fontFamily={'Montserrat'}
            w={{ md: '70%', lg: '40%', base: '70%' }}
            fontSize={{ md: '2vw', lg: '1.3vw', base: '4vw' }}
            bgColor={'#00b4d8'} py={'3.3vh'}
            _hover={{ backgroundColor: '#0096c7' }}
            transition={'all ease 0.5s'}
            onClick={handleSubmit}>
            Login
          </Button>

        </FormControl>

        {/* Divider */}
        <Flex display={'flex'} flexDirection={'row'} justifyContent={'center'} w={'full'}
          alignItems={'center'} color={'#737373'}>
          <Divider />
          <Text w={'full'} textAlign={'center'}
            fontSize={{ md: '2vw', lg: '1vw', base: '3vw' }}
          >Or Authorize With</Text>
          <Divider />
        </Flex >

        {/* Google Auth */}
        <GoogleAuth />
      </Flex>
    </>
  );
};

export default LoginForm;
