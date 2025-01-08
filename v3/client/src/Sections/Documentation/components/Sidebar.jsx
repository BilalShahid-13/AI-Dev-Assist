import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, useDisclosure, VStack, Collapse, Button, Icon } from '@chakra-ui/react';
import { FaBars, FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { BsLayoutSidebarInset } from 'react-icons/bs';

const Sidebar = ({ mainContent }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track if the sidebar is collapsed or not
  const toggleSidebar = () => setIsCollapsed(!isCollapsed); // Toggle the collapse state

  return (
    <Flex display={'flex'} flexDir={'row'} w={'100%'}
      justifyContent={'space-between'} alignItems={'center'}>
      {/* Left Sidebar */}
      <Box
        w={isCollapsed ? '10%' : '15%'}
        bg="gray.800"
        color="white"
        p={4}
        h="100vh"
        transition="width 0.3s"
      // position="fixed"
      >
        {/* Collapsible Sidebar Toggle Button */}
        <Flex display={'flex'} justifyContent={'center'} alignItems={'center'}
          flexDirection={'row'} gap={'2vw'}>
          <Text display={isCollapsed ? 'none' : 'block'}>Contenium</Text>

          <Icon as={BsLayoutSidebarInset}
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            variant="unstyled"
            color="white" />
        </Flex>

        {/* Sidebar Content */}
        <VStack spacing={4} align="start" mt={10}>
          {/* Home */}
          <Box display="flex" alignItems="center">
            <FaHome />
            <Collapse in={!isCollapsed}>
              <Text ml={4} display={isCollapsed ? 'none' : 'block'}>
                Home
              </Text>
            </Collapse>
          </Box>
          {/* About */}
          <Box display="flex" alignItems="center">
            <FaInfoCircle />
            <Collapse in={!isCollapsed}>
              <Text ml={4} display={isCollapsed ? 'none' : 'block'}>
                About
              </Text>
            </Collapse>
          </Box>
          {/* Services */}
          <Box display="flex" alignItems="center">
            {/* <FaServices /> */}
            <Collapse in={!isCollapsed}>
              <Text ml={4} display={isCollapsed ? 'none' : 'block'}>
                Services
              </Text>
            </Collapse>
          </Box>
          {/* Contact */}
          <Box display="flex" alignItems="center">
            <FaPhone />
            <Collapse in={!isCollapsed}>
              <Text ml={4} display={isCollapsed ? 'none' : 'block'}>
                Contact
              </Text>
            </Collapse>
          </Box>
        </VStack>
      </Box>
      {/* Main Content */}
      <Box
        w={isCollapsed ? '90%' : '85%'}
        h="100vh"
        bg="gray.100"
        transition="margin-left 0.3s"
      >
        {mainContent}
      </Box>
    </Flex>
  );
}

export default Sidebar
