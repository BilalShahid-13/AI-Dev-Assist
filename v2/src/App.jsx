import React from 'react'
import LoginForm from './Registration/Login/LoginForm'
import SignUpForm from './Registration/Signup/SignupForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StarBackground from './Effects/StarBackground'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' Component={SignUpForm} />
          <Route path='/login' Component={LoginForm} />
          <Route path='/' Component={StarBackground} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
