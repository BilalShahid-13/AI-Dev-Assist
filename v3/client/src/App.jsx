import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RegistrationRoute from './Registration/RegistrationRoute';
import Home from './Pages/Home';
import Navbar from './Header/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { FooterSection as Footer } from './Footer/FooterSection';

const App = () => {
  const location = useLocation()
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      {!location.pathname.startsWith('/register') && <Navbar />}
      <Routes>
        <Route path='/register/*' element={<RegistrationRoute />} />
        <Route path='/' element={<Home />} />
      </Routes>
      {!location.pathname.startsWith('/register') && <Footer />}
    </>
  );
};

export default App;
