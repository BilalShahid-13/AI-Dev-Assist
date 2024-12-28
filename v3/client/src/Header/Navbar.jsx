import { Box, Flex, Heading, Link as ChakraLink, Button, useBreakpointValue, Icon, Link } from '@chakra-ui/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { NavbarItems } from '../assets/Constants'
import { RiMenu3Line } from "react-icons/ri";
import { ToggleMenu } from '../Animations/Navbar/ToggleMenu';
import { DesktopNavbarAnimation } from '../Animations/Navbar/DesktopNavbarAnimation';

const Navbar = () => {
  const isMobileView = useBreakpointValue({ base: true, lg: false, md: false }, { ssr: false })
  const [isOpen, setIsOpen] = useState(false);

  const MemoizedNavbarItems = useMemo(() => NavbarItems, [NavbarItems]);
  // navigate router
  const navigate = useNavigate()
  // for mobile
  // menu ref
  const navbarMenuRef = useRef();
  // menu items ref
  const navbarItemsRef = useRef();
  // start btn
  const startBtnRef = useRef();

  // desktop
  // favicon
  const faviconRef = useRef();

  useEffect(() => {
    DesktopNavbarAnimation(faviconRef, navbarItemsRef, startBtnRef, navbarMenuRef);
  }, [])
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isMobileView && ToggleMenu(navbarMenuRef, isOpen, navbarItemsRef, startBtnRef);
  }
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'}
        w="100%" pt={'1vh'} position={'relative'} zIndex={20}>
        <Flex
          ref={navbarMenuRef}
          bgColor={'rgba(24, 29, 61,0.5)'}
          blur={'10px'}
          py={'1vh'}
          w={{ base: '100%', md: 'fit-content', lg: '60%' }}
          rounded={{ md: 'full', lg: 'full', base: 'md' }}
          border={'2px solid rgba(38, 44, 82,0.6)'}
          justifyContent={'space-between'}
          alignItems={'center'}
          px="2vw"
          gap={'1vw'}
          display={'flex'}
          overflow={'hidden'}
          h={{ base: '10', lg: '10vh' }}
          transition={'all ease 0.5s'}
          flexDirection={{ md: 'row', lg: 'row', base: 'column' }}
          boxShadow="0px 0px 30px 7px rgba(32, 37, 70,0.5)"
        >
          {/* Favicon */}
          <Flex alignItems="center"
            justifyContent={{ base: 'space-between' }}
            display={'flex'}
            flexDir={{ md: 'row', base: 'row', lg: 'row' }}
            // bgColor={'red'}
            w={{ base: '90%', lg: '140px' }}
            gap={'1vw'} ref={faviconRef}>
            <Flex
              w={{ md: '17%', lg: '22px', base: '22px' }}
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

              fontSize={{ md: '', lg: 'lg', base: '' }}
            >
              Contenium
            </Heading>
            <Icon as={RiMenu3Line} fontSize={'2xl'}
              color='white' onClick={toggleMenu}
              display={{ base: 'flex', md: 'none', lg: 'none' }} />
          </Flex>
          {/* Nav Links */}
          <Flex gap={'2vw'} fontFamily={'Montserrat'}
            display={'flex'} ref={navbarItemsRef}
            flexDir={{ md: 'row', lg: 'row', base: 'column' }}>
            {MemoizedNavbarItems.map((items, index) => (
              <ChakraLink
                as={ReactRouterLink}
                to={items.link}
                key={index}
                textColor={'#f6f7f8'}
                textDecoration={'none'}
                borderBottom='1px solid transparent'
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '1px solid #9043e1',
                  fontSize: 'lg'
                }}
                transition={'all linear 0.3s'}
              >
                {items.name}
              </ChakraLink>
            ))}
          </Flex>

          {/* Registration Buttons */}
          <Flex gap="1vw" fontFamily={'Montserrat'}
            ref={startBtnRef}
          >
            <ChakraLink as={ReactRouterLink}
              to="/register/signup"
              bgColor="white"
              textColor="black" rounded={'full'}
              boxShadow={'0px 0px 30px 7px rgba(32, 37, 255,0.5)'}
              _hover={{
                bgColor: '#9043e1',
                textColor: '#e1e4f0'
              }}
              py={'1.5vh'}
              px={{ lg: '2vw', base: '4vw' }}

              transition={
                'all 0.3s ease-in-out'
              }
              fontSize={{ lg: 'lg', base: 'xs' }}
            >
              Start for Free
            </ChakraLink>
          </Flex>
        </Flex>
      </Flex >

    </>
  )
}

export default Navbar
