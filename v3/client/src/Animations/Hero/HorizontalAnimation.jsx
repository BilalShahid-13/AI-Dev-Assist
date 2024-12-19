
export const HorizontalAnimation = (timeline, HorizontalAnimation) => {
  if (HorizontalAnimation.current) {
    timeline.fromTo(HorizontalAnimation.current, {
      opacity: 0, // Start with opacity 0
      y: 100,
      scale: 0,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      y: 0,
      scale: 1,
      stagger: 0.3
    })
  }
}
