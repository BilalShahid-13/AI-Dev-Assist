import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

const CustomBot = () => {


  return (
    <Flex display={'flex'}
      position={'absolute'}
      zIndex={1}
      bottom={0}
      width="100%"
      height={'350px'}
      justifyContent={'center'}
    // alignItems={'center'}
    >
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/nRoVTbJcuApyw77KhWI2f"
        width="100%"
        // height="300px"

        style={{
          borderRadius: '10px',
          bottom: 0,
          // transform: 'translateX(15%)',
        }}
      />
    </Flex>
  );
};

export default CustomBot;
