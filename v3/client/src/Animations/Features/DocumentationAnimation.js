import gsap from "gsap";

export const DocumentationAnimation = (cardRef, sliderRef) => {
  if (cardRef.current && sliderRef.current) {
    const timeline = gsap.timeline({
      // repeat: -1,
    });
    timeline
      .fromTo(
        cardRef.current.children[0],
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.4,
          x: 0,
          ease: "power4.inOut",
        }
      )
      .fromTo(
        cardRef.current.children[1],
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.4,
          x: 0,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        cardRef.current.children[2],
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.4,
          x: 0,
          ease: "power4.inOut",
        }
      )
      .fromTo(
        sliderRef.current,
        {
          marginLeft: "0vw",
        },
        {
          duration: 1.2,
          marginLeft: "-20vw",
          ease: "circ.inOut",
        }
      )
      .fromTo(
        sliderRef.current,
        {
          marginLeft: "-20vw",
        },
        {
          duration: 1.2,
          marginLeft: "20vw",
          ease: "power1.inOut",
        }
      )
      .fromTo(
        sliderRef.current,
        {
          marginLeft: "20vw",
        },
        {
          duration: 0.6,
          marginLeft: "0vw",
          ease: "power1.inOut",
        }
      );
  }
};
