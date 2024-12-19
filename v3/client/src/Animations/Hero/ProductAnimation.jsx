import gsap from 'gsap';

export const ProductAnimation = (timeline,productRef, productDesRef, productBtnRef) => {
  if (productRef.current &&
    productDesRef.current &&
    productBtnRef.current
  ) {
    timeline.fromTo(productRef.current, {
      opacity: 0, // Start with opacity 0
      y: -100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.3,
      yoyo: true,
      y: 0,
    })
      .fromTo(productDesRef.current, {
        opacity: 0, // Start with opacity 0
        y: 100,
        // Start 50px down (optional for additional effect)
      }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.3,
        yoyo: true,
        y: 0,
      })
      .fromTo(productBtnRef.current, {
        opacity: 0, // Start with opacity 0
        y: -100,
        // Start 50px down (optional for additional effect)
      }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.3,
        y: 0,
      })
  }
};
