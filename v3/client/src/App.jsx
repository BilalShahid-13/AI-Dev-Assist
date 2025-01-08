import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RegistrationRoute from './Registration/RegistrationRoute';
import Home from './Pages/Home';
import Navbar from './Header/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { FooterSection as Footer } from './Footer/FooterSection';
import ContentGeneration from './Pages/ContentGeneration';
import Documentation from './Pages/Documentation';
import { Box } from '@chakra-ui/react';

const App = () => {
  const location = useLocation()
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Box bgColor={'#070707'} gap={'2vh'} display={'flex'}
        flexDir={'column'}>
        {!['/register', '/documentation'].some(path => location.pathname.startsWith(path)) && <Navbar />}
        <Routes>
          <Route path='/register/*' element={<RegistrationRoute />} />
          <Route path='/' element={<Home />} />
          <Route path='/content-generation' element={<ContentGeneration />} />
          <Route path='/documentation' element={<Documentation />} />
        </Routes>
      </Box>
      {!location.pathname.startsWith('/register') && <Footer />}
    </>
  );
};

export default App;
