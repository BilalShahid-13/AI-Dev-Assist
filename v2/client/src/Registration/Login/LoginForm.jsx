import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Button,
  Text,
  Divider,
  Icon,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Framer Motion's animation library
import { User, Lock, CircleUserRound, BotMessageSquare, Frown, Smile, Github } from "lucide-react"; // Import Lucide icons
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import StarBackground from "../../Effects/StarBackground";
import SocialButtons from "../../Components/SocialBtn/SocialButtons";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/LoginAuth/authslice.jsx';

const LoginPage = () => {
  // login value
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState({ username: '', password: '' })
  const [timeoutId, setTimeoutId] = useState(null);

  //Redux Logic
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.auth);

  // Input change handler
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      if (name === 'username') {
        const usernameValidation = checkUsername(value);
        setError((prevError) => ({ ...prevError, username: usernameValidation.error }));
      }
    }, 500);

    // Store the new timeout ID
    setTimeoutId(newTimeoutId);
  };

  // Handle login button click
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username: login.username, password: login.password }));
  };





  // animations value
  const [randomX, setRandomX] = useState([0, 20, -20, 20]);
  const [randomY, setRandomY] = useState([0, 20, -20, 20]);
  const leftRef = useRef(null)
  const headlineTextRef = useRef(null);
  const inputFieldRef = useRef(null);
  const loginBtnRef = useRef(null);
  const singupBtnRef = useRef(null);
  const robotRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate()
  // robot animation random
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomX([
        Math.random() * -10, // Random value between -50
        Math.random() * 10,  // Random value between 0 and 50
        Math.random() * -10, // Another random value between -50
        Math.random() * 10   // Another random value between 0 and 50
      ]);
      setRandomY([
        Math.random() * -10, // Random value between -50
        Math.random() * 10,  // Random value between 0 and 50
        Math.random() * -10, // Another random value between -50
        Math.random() * 10   // Another random value between 0 and 50
      ]);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  // left & right animation
  useEffect(() => {
    const timeline = gsap.timeline();
    // left
    timeline.fromTo(headlineTextRef.current.children,
      { y: -20, opacity: 0 },
      {
        y: 0, duration: 0.7,
        opacity: 1,
        stagger: 0.5,
        yoyo: true,
        ease: "power2.inOut"
      }).fromTo(inputFieldRef.current.children,
        { x: -20, opacity: 0 },
        {
          x: 0, duration: 0.5,
          opacity: 1,
          stagger: 0.9,
          yoyo: true,
          ease: "power2.inOut"
        }).fromTo(loginBtnRef.current,
          { y: -20, opacity: 0 },
          {
            y: 0, duration: 0.4,
            opacity: 1,
            yoyo: true,
            ease: "linear"
          }).fromTo(singupBtnRef.current,
            { xPercent: -100, opacity: 0 },
            {
              xPercent: 0, duration: 0.3,
              opacity: 1,
              stagger: 0.9,
              yoyo: true,
              ease: "ease"
            });

    // right
    timeline.fromTo(rightRef.current, {
      xPercent: 100,
      opacity: 0
    }, {
      xPercent: -0,
      opacity: 1,
      duration: 0.3,
      ease: 'linear',
    }).fromTo(robotRef.current.children, {
      yPercent: -100, opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      yoyo: true,
      duration: 0.8,
      stagger: 0.5,
      ease: 'linear'
    })
  }, [])


  function rightAnimation() {
    const timeline = gsap.timeline();
    timeline.to(robotRef.current.children, {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "linear",
    })
    timeline.fromTo(rightRef.current, {
      xPercent: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
    }, {
      width: "65%",
      xPercent: -80,
      clipPath: "polygon(0 0, 100% 0, 15% 100%, 0% 100%)",
      duration: 1,
      ease: "linear",
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }).to(robotRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setTimeout(() => {
          navigate('/signup')
        }, 200);
      }
    })
    leftRef.current.style.display = "none";
  }

  function onclickSignin() {
    gsap.to(leftRef.current.children, {
      opacity: 0,
      duration: 0.5, stagger: 0.5,
      onComplete: () => {
        rightAnimation()
      }
    })
  }

  function checkUsername(e) {
    const value = e;

    // Check if the value is empty
    if (value === '' || value === null || value === undefined) {
      return { error: 'Username cannot be empty', color: 'red' };
    }
    // Check if the value starts with a special character
    const specialCharRegex = /^[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharRegex.test(value)) {
      return { error: 'Username cannot start with a special character', color: 'red' };
    }
    // Check if the value starts with a number
    const numberRegex = /^[0-9]/;
    if (numberRegex.test(value)) {
      return { error: 'Username cannot start with a number', color: 'red' };
    }
    // Check if the username is less than 8 characters
    if (value.length < 8) {
      return { error: 'Username must be at least 8 characters', color: 'red' };
    }
    // If no errors, return a success state
    return { error: '', color: 'green' };
  }


  return (
    <>
      {/* <StarBackground /> */}
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100vw"
        h="100vh"
        bg="gray.200"
      >
        <Flex
          bg="white"
          w={{ base: "70%", md: "60%", lg: "90%" }}
          h={{ base: "70%", md: "60%", lg: "90%" }}
          border={'1.3px solid black'}
          borderRadius="xl"
          // boxShadow="2xl" // Added bloom and blur effect
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1), 0px 10px 20px
          rgba(0, 0, 0, 0.1), 0px 15px 30px rgba(0, 0, 0, 0.3)" // Custom colored box shadow
          overflow="hidden"
          position="relative"
          transition={'all ease 0.6s'}
        >
          {/* Left Side - Form */}
          <Flex
            w="50%"
            p={8}
            flexDirection="column"
            justifyContent="center"
            bg="white"
            borderRadius={'xl'}
            boxShadow={'xl'}
            clipPath="polygon(0 0, 80% 0, 100% 100%, 0 100%)"
          >
            {/* form */}
            <FormControl gap={'6vh'}
              display={'flex'}
              ref={leftRef}
              flexDirection={'column'}
              justifyContent={'center'} alignItems={'center'}
              px={'3vw'}>
              {/* login heading */}
              <Box w={'fit-content'} justifyContent={'center'}
                alignItems={'center'}
                ref={headlineTextRef}
                display={'flex'} flexDirection={'column'} gap={2}>
                <Heading fontFamily={'Montserrat'}
                  fontWeight={'bold'}
                  fontSize={{ md: '4xl', lg: '6xl', base: '4xl' }}
                >Login</Heading>
                <Divider
                  borderWidth="3px"
                  w="50%"
                  rounded="full"
                  borderColor={'#000000'}
                />
              </Box>
              {/* inputfields */}
              <Flex w={'full'} display={'flex'}
                flexDir={'column'}
                gap={'6vh'}
                ref={inputFieldRef}>
                {/* username */}
                <InputGroup flexDirection="column" >
                  <FormLabel fontFamily={'Montserrat'}>Username</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={CircleUserRound}
                        color={'gray.900'}
                      />
                    </InputLeftElement>
                    <Input type="text" fontFamily={'Montserrat'}
                      name="username"
                      position={'relative'}
                      placeholder="username"
                      border='none' rounded='none'
                      borderBottom={`1px solid ${error.username ? 'red' : '#333'}`}
                      outline={'none'}
                      textColor={'gray.500'}
                      bgColor={'white'}
                      value={login.username}
                      onChange={handleInput}
                      _focus={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _hover={{
                        borderBottom: `1px solid ${error.username ? error.color : 'blue'}`
                      }}
                    />
                  </InputGroup>
                </InputGroup>
                {error.username && <Text color="red" fontSize="sm">{error.username}</Text>}

                {/* password */}
                <InputGroup flexDirection="column">
                  <FormLabel fontFamily={'Montserrat'}>Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={Lock} color={'gray.900'} />
                    </InputLeftElement>
                    <Input type="password" placeholder="username"
                      name="password"
                      border='none' rounded='none'
                      textColor={'gray.500'}
                      borderBottom={`1px solid ${error.password ? 'red' : '#333'}`}
                      outline={'none'}
                      bgColor={'white'}
                      value={login.password}
                      onChange={handleInput}
                      _focus={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _hover={{
                        borderBottom: `1px solid ${error.password ? error.color : 'blue'}`
                      }} />
                  </InputGroup>
                </InputGroup>
              </Flex>

              <Button fontFamily={'Montserrat'} rounded={'full'}
                bgColor={'blue.800'} textColor={'white'}
                py={{ md: 6, lg: 8, base: 6 }}
                px={{ md: '7vw', lg: '9vw', base: '7vw' }}
                _hover={{
                  bgColor: 'blue.900',
                }}
                transition={'all 0.3s ease'} ref={loginBtnRef} onClick={handleLogin}>Log In</Button>



              <Box display={'flex'} flexDirection={'row'}
                justifyContent={'center'} alignItems={'center'} gap={6}>
                {/* google */}
                <SocialButtons name={'Google'} bgColor={'#eb4335'} borderColor={'red'}
                  icon={FcGoogle}
                />
                {/* divider */}
                <Divider orientation='vertical' rounded={'full'} borderColor={'black'} />
                {/* github */}
                <SocialButtons name={'Github'} icon={FaGithub} bgColor={'gray'} borderColor={'black'} />
              </Box>

              <Box ref={singupBtnRef} display={'flex'} flexDirection={'row'} gap='1'
                textAlign={'center'} w={'100%'}
                justifyContent={'center'}>
                Dont have an account
                <Text fontWeight={'semibold'} _hover={{
                  cursor: 'pointer',
                }} onClick={onclickSignin}>Signup</Text>?
              </Box>
            </FormControl>
          </Flex>

          {/* Right Side - Black Section */}
          <Flex
            w="50%"
            bg="black"
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            boxShadow={'xl'}
            clipPath="polygon(0 0, 100% 0, 100% 100%, 20% 100%)"
            ref={rightRef}
          >
            <Flex
              display={'flex'} flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'6vh'}
              w={'80%'}
              ml={'3vw'}
              ref={robotRef}
              dropShadow={'xl'}
              fontFamily="Montserrat">
              <motion.div
                style={{
                  textAlign: 'center'
                }}
                animate={{ x: randomX, y: randomY }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}>
                <Icon
                  as={error.username || error.password ? Frown : Smile}
                  fontSize="7vw"
                />
              </motion.div>
              <Text textAlign={'center'}>{error.username || error.password}</Text>
              <Text>Join the Future of Creation</Text>
              <Heading fontSize={{ lg: "4xl", md: "2xl", base: "2xl" }}>
                Unleash Your Creativity
              </Heading>
              <Text fontSize={{ lg: "lg", md: "xl", base: "2xl" }}
                textAlign={'center'} ml={'2vw'}>
                Experience the power of AI-driven content and code generation
              </Text>
            </Flex>
          </Flex>
        </Flex >
      </Flex >

    </>
  );
};

export default LoginPage;
