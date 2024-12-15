import React, { useEffect } from 'react';
import './style.css';

const StarBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80, // Reduced number of particles
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0.1,
            color: "#ffffff",
          },
          polygon: {
            nb_sides: 10, // Reduced sides for star shape
          },
          image: {
            src: "img/github.svg", // Update this path as needed
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: 1 + Math.random() * 2, // Reduced size of particles
          random: false,
        },
        line_linked: {
          enable: true, // Disabled line linking for performance
          color: "#ffffff",
        },
        move: {
          enable: true,
          speed: 4, // Increased speed for smoother movement
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: true,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div id="particles-js">
    </div>
  );
};

export default StarBackground;