import React, { useEffect } from "react";
import "./style.css";

const StarBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80, // Number of particles
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#000000",
        },
        shape: {
          type: "circle", // Shape of the particles
          stroke: {
            width: 0.1,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5, // Sides for a polygon-like effect
          },
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3, // Size of particles
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#000000",
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3, // Speed of particle movement
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true, // Attract particles towards the mouse
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
            mode: "grab", // Enable hover interaction
          },
          onclick: {
            enable: true,
            mode: "push", // Push particles on click
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
            distance: 200,
            size: 10,
            duration: 0.3,
            opacity: 0.8,
            speed: 3,
          },
          repulse: {
            distance: 100, // Repulse particles to form an arrow-like shape
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

  return <div id="particles-js"></div>;
};

export default StarBackground;
