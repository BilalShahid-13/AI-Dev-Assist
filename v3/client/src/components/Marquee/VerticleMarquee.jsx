import React, { useEffect, useRef, useState } from 'react';
import Cards from '../Cards';
import { Box, Flex } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { HeroImages } from '../../assets/Constants';

const VerticleMarquee = ({ direction = 'column', VerticalMarqueeRef }) => {

  const marqueeRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0); // Count of loaded images

  const totalImages = HeroImages.length;

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  useEffect(() => {
    // Only start GSAP animation once all images are loaded
    if (imagesLoaded < totalImages) return;

    const container = marqueeRef.current;
    if (!container) return;

    const items = Array.from(container.children);
    const totalHeight = items.reduce((acc, item) => acc + item.offsetHeight, 0);

    // Clone items for seamless looping
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });

    // Set initial position and GSAP animation
    gsap.set(container, { y: 0 });

    // GSAP Animation for vertical scrolling
    const animation = gsap.to(container, {
      y: `-${totalHeight}px`,
      duration: 30, // Adjust the duration for faster scrolling
      repeat: -1,
      ease: 'linear',
      transformOrigin: "0 0", // Ensures consistent transform behavior
    });

    // Slow down on hover
    container.addEventListener('mouseenter', () => {
      animation.timeScale(0.1); // Slow down to 10% of original speed
    });

    container.addEventListener('mouseleave', () => {
      animation.timeScale(1); // Restore to normal speed
    });

    // Cleanup
    return () => {
      animation.kill();
      container.removeEventListener('mouseenter', () => animation.timeScale(0.1));
      container.removeEventListener('mouseleave', () => animation.timeScale(1));
    };
  }, [imagesLoaded]); // This effect depends on the imagesLoaded state

  return (
    <Flex
      w="100%"
      h="100vh" // Height of the marquee
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      position="relative"
      ref={VerticalMarqueeRef}
    >
      {/* Top Gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="20px"
        w="100%"
        borderRadius="md"
        bgColor="rgba(8, 10, 19, 0.8)"
        zIndex="10"
        filter="blur(10px)"
      />

      {/* Bottom Gradient */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="20px"
        w="100%"
        borderRadius="md"
        bgColor="rgba(57, 37, 118, 0.8)"
        zIndex="10"
        filter="blur(10px)"
      />

      <Box
        ref={marqueeRef}
        display="flex"
        flexDirection={direction} // Vertical scrolling
        alignItems="center"
        width="100%"
        gap="3vh"
      >
        {HeroImages.map((img, index) => (
          <Cards
            key={index}
            img={img}
            w="90%"
            onLoad={handleImageLoad} // Trigger handleImageLoad on image load
          />
        ))}
      </Box>
    </Flex>
  );
};

export default VerticleMarquee;
