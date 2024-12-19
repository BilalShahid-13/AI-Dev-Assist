import gsap from 'gsap'

export const VerticalMarqueAnimation = (timeline, VerticalMarqueeRef) => {
  if (VerticalMarqueeRef.current) {
    timeline.fromTo(VerticalMarqueeRef.current, {
      scale: 0,
      x: -100,
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      x: 0,
      stagger: 0.3,
      // y: 0,
      yoyo: true,
      scale: 1,
      ease: 'power1.inOut',
    })
  }
}
