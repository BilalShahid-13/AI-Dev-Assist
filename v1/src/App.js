import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn/Signin";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Homepage from "./components/Home/Homepage";
import "./App.css";
import AppNavbar from "./components/Home/Header/Navbar";
import FooterMain from "./components/Home/Footer/FooterMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
        <FooterMain />
      </BrowserRouter>
    </>
  );
}

export default App;
