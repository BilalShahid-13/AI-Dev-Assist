import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './LoginAuth/authslice.jsx';

const store = configureStore({
  reducer: {
    login: LoginReducer,  
  },
});

export default store;