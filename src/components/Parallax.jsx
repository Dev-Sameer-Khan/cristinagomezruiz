import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Parallax = ({ urls, box = false }) => {
  const img = useRef(null);
  const flower = useRef(null);
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(img.current, {
      yPercent: 40,
      ease: "none",
      willChange: "transform",
      scrollTrigger: {
        trigger: container.current,
        start: "0% 50%",
        end: "100% -50%",
        scrub: true,
      },
    });
    gsap.to(flower.current, {
      rotate: 180,
      ease: "none",
      willChange: "transform",
      scrollTrigger: {
        trigger: container.current,
        start: "0% 50%",
        end: "100% -50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={container}
      className="w-full h-[200vh] overflow-hidden relative"
    >
      <img
        ref={img}
        className="w-full h-full object-cover scale-110"
        src={urls}
        alt="Parallax Background"
      />
      {box && (
        <div className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 p-12 bg-[#161310] text-white flex flex-col justify-between items-center h-[90vh] text-center font-[light]">
        <div className="max-w-lg text-[2vw] leading-[1.2]">
            I'm always excited to discuss new projects and collaboration opportunities. Feel free to reach out and let's capture some beautiful moments together.
        </div>
        <div className="my-10">
        <img ref={flower} src="./flower.svg" alt="" />
        </div>
        <div className="text-[1vw] uppercase leading-[1] tracking-tight space-y-2">
            <p>PHOTOVOGUE PROFILE</p>
            <p>INSTAGRAM: @CRIS______GOMEZ</p>
            <p>HEY@CRISTINAGOMEZRUIZ.COM</p>
        </div>
    </div>
      )}
    </section>
  );
};

export default Parallax;
