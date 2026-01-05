// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#152541] text-white py-16"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-slate-300">A section of my recent work</p>
        </motion.div>

        {/* Project cards */}
        <div className="Project-Card mb-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/hassnainali13?tab=repositories"
            target="_blank"
            className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
