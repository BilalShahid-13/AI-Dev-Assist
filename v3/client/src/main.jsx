import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId='813692978221-ie2u5j9gvv0ena11avq6igalh062lei2.apps.googleusercontent.com'>
          <Provider store={store}>
            <App />
          </Provider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
