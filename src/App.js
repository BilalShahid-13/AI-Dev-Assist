import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/Authentication/SignIn/Signin';
import SignUp from './components/Authentication/SignUp/SignUp'
import Homepage from './components/Home/Homepage';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
