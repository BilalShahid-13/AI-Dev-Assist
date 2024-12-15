import React from "react";
import { Button, Flex, Text, Title } from "rizzui";
import { NavbarItems } from "../../../Constant";

const AppNavbar = () => {
  return (
    <>
      {/* <StarsBackground /> */}
      <div className="flex justify-center items-center pt-3">
        <header className="drop-shadow-md px-4 py-3 flex justify-between
         items-center backdrop-blur-sm rounded-lg w-[80%]
          max-md:w-full bg-[rgba(33, 33, 32,0.1)] text-[#fcfaf9]">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <h1
              className="text-[#fcfaf9] text-2xl font-extrabold flex items-center gap-2"
            >
              <img
                src="/logo192.png"
                alt="Logo"
                className="w-10 h-10 max-md:w-10 max-md:h-9"
              />
              <Text className="font-medium">Contenium</Text>
            </h1>
          </div>

          {/* Navbar Links in the Center */}
          <nav className="flex-1 flex justify-center items-center gap-6 max-md:hidden">
            {NavbarItems.map((items, index) => (
              <Button
                key={index}
                rounded="none"
                color="none"
                className="MyCustomFont transition-all ease-linear duration-500 border-l-0 border-t-0 border-r-0 hover:border-b-[1px] hover:border-[#fcfaf9] hover:text-[#fcfaf9]"
              >
                {items.title}
              </Button>
            ))}
          </nav>

          {/* Sign In Button on the Right */}
          <div className="flex items-center gap-4">
            <Button className="bg-[#34312d] border-b-2 border-[#484441]">Sign In</Button>
            <Button className="primary-button">Discover the Platform</Button>
          </div>
        </header>
      </div>
    </>
  );
};

export default AppNavbar;
