import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RegistrationRoute from './Registration/RegistrationRoute';
import Home from './Pages/Home';
import Navbar from './Header/Navbar';

const App = () => {
  const location = useLocation()
  return (
    <>
      {!location.pathname.startsWith('/register') && <Navbar />}
      <Routes>
        <Route path='/register/*' element={<RegistrationRoute />} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<LoginForm/> } /> */}
      </Routes>
    </>
  );
};

export default App;
