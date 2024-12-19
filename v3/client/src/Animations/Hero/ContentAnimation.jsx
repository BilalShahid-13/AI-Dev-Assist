import gsap from "gsap"

export default function ContentAnimation(timeline,headlineRef, descriptionRef, btnRef) {
  if (headlineRef.current && descriptionRef.current && btnRef.current) {
    // const timeline = gsap.timeline()
    timeline.fromTo(headlineRef.current.children, {
      opacity: 0, // Start with opacity 0
      y: -100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      stagger:0.8,
      ease: 'power1.inOut',
      y: 0,
    }).fromTo(descriptionRef.current, {
      opacity: 0, // Start with opacity 0
      y: -100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      y: 0,
    }).fromTo(btnRef.current.children, {
      opacity: 0, // Start with opacity 0
      y: 100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      stagger:0.4,
      ease: 'power1.inOut',
      y: 0,
    })
  }
}
