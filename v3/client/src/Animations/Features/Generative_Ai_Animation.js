import gsap from "gsap";

export const Generative_Ai_Animation = (
  dividersRef,
  ImageRef,
  textAreaRef,
  cardTitle,
  inputRef,
  textValue,
  setIsLoading,
  spinnerRef,
  submitBtnRef
) => {
  if (
    dividersRef.current &&
    ImageRef.current &&
    textAreaRef.current &&
    cardTitle.current &&
    inputRef.current &&
    textValue &&
    spinnerRef.current &&
    submitBtnRef.current
  ) {
    const text = textValue;
    const words = text.split(" ");

    // Clear the input value initially
    inputRef.current.value = "";
    submitBtnRef.current.style.display = "block";
    spinnerRef.current.style.display = "none";

    // Initially hide dividers and images
    gsap.set([dividersRef.current, ImageRef.current], {
      opacity: 0,
      y: -100,
    });

    // Main timeline for cardTitle, textArea, and input animation
    const mainTimeline = gsap.timeline({
      // repeat: -1,
      onComplete: () => {
        // Hide submit button and show spinner when animations are complete
        submitBtnRef.current.style.display = "none";
        spinnerRef.current.style.display = "block";

        // Set a timeout to change back after 2 seconds
        setTimeout(() => {
          submitBtnRef.current.style.display = "block";
          spinnerRef.current.style.display = "none";
          // Start animating dividers after showing the spinner (after timeout)
          gsap.fromTo(
            dividersRef.current,
            {
              opacity: 0,
              y: -10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.5,
              ease: "power4.inOut",
            }
          );
          gsap.fromTo(
            ImageRef.current,
            {
              opacity: 0,
              y: -100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.5,
              ease: "power4.inOut",
            }
          );
        }, 1000);
      },
      // repeat: -1,
    });

    // Initial animations for cardTitle, textArea, and input value word by word
    mainTimeline
      .fromTo(
        cardTitle.current.children,
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.3,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        textAreaRef.current.children,
        {
          opacity: 0,
          y: -10,
          scale: 0,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        }
      );

    // Animate input value word by word
    words.forEach((word, index) => {
      mainTimeline.to(inputRef.current, {
        onUpdate: () => {
          inputRef.current.value = words.slice(0, index + 1).join(" ");
        },

        duration: 0.4,
        ease: "power4.inOut",
      });
    });
  }
};
