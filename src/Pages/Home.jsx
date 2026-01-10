import React from "react";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Skills from "../Components/Skills.jsx";
import Project from "../Components/Project.jsx";
import Experiance from "../Components/Experiance.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";
import FloatingBot from "../Components/FloatingBot";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experiance />
      <Contact />
      <Footer/>
      <FloatingBot />
    </div>
  );
};

export default Home;
