import React from "react";
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
} from "@chakra-ui/react";
import { User, Lock, Mail } from "lucide-react"; // Importing icons
import StarBackground from "../../Effects/StarBackground";

const SignUpForm = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100vw"
        h="100vh"
        bg="gray.100"
      >
        <StarBackground />
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
          {/* Left Side - Welcome Back */}
          <Box
            w="60%"
            bg="black"
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            clipPath="polygon(0 0, 100% 0, 10% 100%, 0% 100%)"
          >
            <Heading fontSize="2xl" mb={4} fontFamily="Montserrat">
              WELCOME BACK!
            </Heading>
            <Text textAlign="center" fontSize="sm" px={8}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Delentiti.
            </Text>
          </Box>

          {/* Right Side - Sign Up Form */}
          <Flex
            w="50%"
            p={8}
            flexDirection="column"
            justifyContent="center"
            bg="white"

          >
            <Heading fontSize="2xl" mb={4} fontFamily="Montserrat" textAlign="left">
              Sign Up
            </Heading>
            <Divider
              borderWidth="2px"
              borderColor="gray.800"
              width="50px"
              mb={6}
            />
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <User color="gray" size={20} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  borderBottom="2px solid gray"
                  borderRadius="none"
                  _hover={{ borderBottomColor: "black" }}
                  _focus={{ borderBottomColor: "blue", boxShadow: "none" }}
                />
              </InputGroup>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Mail color="gray" size={20} />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  borderBottom="2px solid gray"
                  borderRadius="none"
                  _hover={{ borderBottomColor: "black" }}
                  _focus={{ borderBottomColor: "blue", boxShadow: "none" }}
                />
              </InputGroup>
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Lock color="gray" size={20} />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  borderBottom="2px solid gray"
                  borderRadius="none"
                  _hover={{ borderBottomColor: "black" }}
                  _focus={{ borderBottomColor: "blue", boxShadow: "none" }}
                />
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="blackAlpha"
              bg="black"
              color="white"
              borderRadius="full"
              px={8}
              py={6}
              _hover={{ bg: "gray.800" }}
            >
              Sign Up
            </Button>
            <Text mt={4} textAlign="center">
              Already have an account?{" "}
              <Text as="span" color="blue.500" cursor="pointer">
                Login
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpForm;
