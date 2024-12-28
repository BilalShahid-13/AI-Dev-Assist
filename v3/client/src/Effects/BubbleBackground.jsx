import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

const BubbleBackground = () => {

  useEffect(() => {
    // Initialize particles.js after component mounts
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 360,
          density: {
            enable: true,
            value_area: 850,
          },
        },
        color: {
          // value: getRandomColor(),  // Initial random color
          value: ["#e0a3f0", "#993cdc", '#240886', '#993cdc', '#d4caee', '#ffffff', '#e80000'],  // Initial random color
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.75,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2.5,
            size_min: 0,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.15,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 2,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, [])

  return (
    <Flex
      id="particles-js"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex={0}  // Ensure it's behind the content
      pointerEvents="none"  // Prevent particles background from blocking text selection or clicks
    />
  );
};

export default BubbleBackground;
