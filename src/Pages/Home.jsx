import React from "react";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Skills from "../Components/Skills.jsx";
import Project from "../Components/Project.jsx";
import Experiance from "../Components/Experiance.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";

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
    </div>
  );
};

export default Home;
