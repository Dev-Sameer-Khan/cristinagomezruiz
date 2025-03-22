import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const img = useRef(null);
  const text = useRef(null);

  // useEffect(() => {

  //   const tl = gsap.timeline()

  //   tl.from(img.current, { 
  //     scale: 1.1, 
  //     willChange: 'transform', 
  //     delay: 5,
  //     duration: .5,
  //   })
  //   .from(text.current, {   
  //     willChange: 'transform', 
  //     duration: .5,
  //   });
  // }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[15%] h-[40%] grayscale-100 overflow-hidden">
        <img ref={img} className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        />
      </div>
      <div className="absolute -bottom-10 left-5 overflow-hidden">
        <h1 ref={text} className="font-[light] text-[15.5vw] leading-none tracking-tight text-center">
          Cristina Gómez
        </h1>
      </div>
    </section>
  );
};

export default Hero;
