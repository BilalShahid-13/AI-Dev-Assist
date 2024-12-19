import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId='813692978221-ie2u5j9gvv0ena11avq6igalh062lei2.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
