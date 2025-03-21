import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./components/Navbar";
import About from "./Sections/About";
import Parallax from "./components/Parallax";
import Video from "./Sections/Video";
import Footer from "./components/Footer";
import Projects from "./Sections/Projects";

const App = () => {
  const urls = {
    url1: "https://images.unsplash.com/photo-1734688143752-9ce8984aacf9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url2: "https://images.unsplash.com/photo-1605460380650-e739914e0e4f?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <main className="bg-[#161310] text-[#ECEBEB] select-none relative">
      <Navbar />
      <Hero />
      <About />
      <Parallax urls={urls.url1} />
      <Video />
      <Projects />
      <Parallax urls={urls.url2} box={true} />
      <Footer />
    </main>
  );
};

export default App;
