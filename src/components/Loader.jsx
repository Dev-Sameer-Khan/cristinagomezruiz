import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734688143752-9ce8984aacf9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605460380650-e739914e0e4f?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Loader = () => {
  const loader = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 500);

    gsap.to(loader.current, {
      opacity: 0,
      display: 'none',
      delay: 5,
      ease: "none",
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={loader}
      className="w-full h-screen bg-white text-black flex itm justify-center fixed top-0 left-0 z-[99999]"
    >
      <div className="w-full h-ful flex items-center justify-center -mt-[8%]">
      <div className="flex w-[15%] h-[40%] flex-col items-center justify-center">
        <img
          src={images[currentImage]}
          alt="Loader"
          className="w-full h-full object-cover"
        />
        <h1 className="text-2xl font-bold mt-4">Cristina Gómez</h1>
      </div>
      </div>
      <div></div>
    </section>
  );
};

export default Loader;
