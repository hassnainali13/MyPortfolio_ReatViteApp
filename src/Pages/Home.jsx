import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About.jsx";
import Skills from "../Components/Skills.jsx";
import Project from "../Components/Project.jsx";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default Home;
