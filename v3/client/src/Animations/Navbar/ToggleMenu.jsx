import gsap from 'gsap';

export const ToggleMenu = (navbarMenuRef, isOpen, navbarItemsRef, startBtnRef) => {
  const timeline = gsap.timeline();
  if (navbarMenuRef.current) {
    if (isOpen) {
      timeline.to(navbarMenuRef.current, {
        duration: 0.5,
        height: '200', // Open the menu to 100% height
        // maxHeight: '500px',
        ease: 'power2.out',
      }).fromTo(navbarItemsRef.current.children, {
        opacity: 0,
        y: -10,
      }, {
        opacity: 1,
        duration: 0.4,
        y: 0,
        ease: 'power2.out',
        stagger: 0.5,
      }).fromTo(startBtnRef.current.children, {
        opacity: 0,
        y: 100
      }, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.5,
        ease: 'power2.out',
      })

    } else {
      timeline.to(startBtnRef.current.children, {
        y: 100,
        duration: 0.5,
        stagger: 0.5,
        opacity: 0,
        ease: 'power2.out',
      }).to(navbarItemsRef.current.children, {
        y: 100,
        duration: 0.5,
        stagger: 0.5,
        opacity: 0,
        ease: 'power2.out',
      }).to(navbarMenuRef.current, {
        duration: 0.1,
        // maxHeight:'40px',
        height: '40', // Close the menu to 0 height
        ease: 'power2.out',
      });
    }
  }
};
