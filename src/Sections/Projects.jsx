import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const spans = useRef([]);

  useEffect(() => {
    if (spans.current[0]) {
      gsap.set(spans.current[0], { color: "white" });
    }
  }, []);

  const changeImg = (i) => {
    setIndex(i);
    spans.current.forEach((span, idx) => {
      gsap.to(span, { color: idx === i ? "white" : "#787878", duration: 0.3 });
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-6 flex-col">
      <div className="w-[18%] h-1/2">
        <img
          className="w-full h-full object-cover"
          src={`./img/${index}.avif`}
          alt=""
        />
      </div>
      <div className="flex gap-1 font-[bold]">
        <h1>Projects</h1>
        <h1>/</h1>
        <h1 className="text-[#787878]">Archives</h1>
      </div>
      <div className="w-[50%] text-[2vw] font-[light] text-[#787878] text-center">
        {[
          "Alicia Bezares -- ",
          "Cantamarta -- ",
          "Dior -- ",
          "Escuela San Telmo ",
          "Estela Clarés -- ",
          "Ivanos -- ",
          "Maimono -- ",
          "Rocstrong ",
          "Southwest Festival -- ",
          "Wearcduenas",
        ].map((elem, i) => (
          <span
            ref={(el) => (spans.current[i] = el)}
            key={i}
            onMouseEnter={() => changeImg(i)}
          >
            {elem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
