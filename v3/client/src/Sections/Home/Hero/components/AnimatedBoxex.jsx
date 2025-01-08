import React, { useEffect, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { gsap } from 'gsap';

const AnimatedBoxes = ({ w = '12px', productAnimatedBoxRef }) => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    // Loop through each box and animate them sequentially
    boxes.forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          opacity: 0, // Start with opacity 0
          border: 'none', // No border initially
        },
        {
          opacity: 1, // Fade to opacity 1
          border: '1px solid white', // Add border when it animates
          delay: index * 0.5, // Delay each box animation
          duration: 1, // Animation duration
          ease: 'power2.inOut',
          onComplete: () => {
            // After the last box animation, keep the border on
            if (index === boxes.length - 1) {
              gsap.set(box, { border: '2px solid black' });
            }

            // Remove border from the previous box when current box animates
            if (index > 0) {
              gsap.to(boxes[index - 1], { border: 'none', duration: 0.5, ease: 'power2.inOut' });
            }
          }
        }
      );
    });
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" gap="15px" direction={'column'} ref={productAnimatedBoxRef}>
      <Box
        ref={(el) => (boxesRef.current[0] = el)}
        w={w} h={w}
        bgColor="#e0b1f2"
        rounded="full" // Ensures padding is inside and does not affect the overall size
      />
      <Box ref={(el) => (boxesRef.current[1] = el)} w={w} h={w} bgColor="#9750d4" rounded="full" />
      <Box ref={(el) => (boxesRef.current[2] = el)} w={w} h={w} bgColor="#3f0fae" rounded="full" />
      <Box ref={(el) => (boxesRef.current[3] = el)} w={w} h={w} bgColor="#563A9C" rounded="full" />
    </Flex>
  );
};

export default AnimatedBoxes;
