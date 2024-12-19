import gsap from 'gsap';
import React from 'react'

export const DesktopNavbarAnimation = (faviconRef, navbarItemsRef, startBtnRef, navbarMenuRef) => {
  const timeline = gsap.timeline();
  if (faviconRef.current && navbarItemsRef.current && startBtnRef.current, navbarMenuRef.current) {
    timeline.fromTo(navbarMenuRef.current, {
      opacity: 0, // Start with opacity 0
      y: -100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 0.7,
      ease: 'power3.inOut',
      y: 0,
      stagger: 0.4,
    }).fromTo(faviconRef.current.children, {
      opacity: 0, // Start with opacity 0
      y: -100,
      // Start 50px down (optional for additional effect)
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      y: 0,
      stagger: 0.4,
    })
      .fromTo(navbarItemsRef.current.children, {
        opacity: 0,
        y: -10,
      }, {
        opacity: 1,
        duration: 0.4,
        y: 0,
        ease: 'power2.out',
        stagger: 0.5, // Adjust the stagger value as <needed></needed>

      }).fromTo(startBtnRef.current.children, {
        opacity: 0,
        y: -10,
      }, {
        opacity: 1,
        duration: 0.4,
        y: 0,
        ease: 'power2.out',
        stagger: 0.5, // Adjust the stagger value as <needed></needed>

      })
  }
}
