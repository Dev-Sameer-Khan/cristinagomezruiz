import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

const About = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!text1.current || !text2.current) return;

    const splitText1 = new SplitType(text1.current, { types: "lines" });
    const splitText2 = new SplitType(text2.current, { types: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "50% 50%",
        end: "50% -50%",
        scrub: 0.3,
        pin: true,
      },
      defaults: { stagger: 0.1, duration: 1, ease: "power2.out" },
    });

    tl.fromTo(
      splitText1.lines,
      { yPercent: -20, clipPath: "inset(0% 0 0 0)" },
      { yPercent: 0, delay: 1, clipPath: "inset(100% 0 0 0)" },
      ">"
    )
      .set(text1.current, { opacity: 0 }, "-=0.5")
      .set(text2.current, { opacity: 1 }, "-=0.5")
      .fromTo(
        splitText2.lines,
        { yPercent: 0, clipPath: "inset(0 0 100% 0)" },
        { yPercent: -20, clipPath: "inset(0 0 0% 0)" },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitText1.revert();
      splitText2.revert();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative w-full h-screen flex items-center justify-center text-[3vw] leading-none text-center font-light"
    >
      <div ref={text1} className="text-1 w-[80%] opacity-100">
        As a passionate photographer, I capture moments that tell stories beyond
        words. Each frame is a window into emotions, landscapes, and the
        intricate beauty of human experience.
      </div>
      <div ref={text2} className="absolute text-2 w-[80%] opacity-0">
        Through my lens, I explore the profound narratives hidden in everyday
        scenes. Each photograph is a testament to the raw, unfiltered moments
        that connect us to the world's intricate tapestry of human emotion and
        experience.
      </div>
    </div>
  );
};

export default About;
