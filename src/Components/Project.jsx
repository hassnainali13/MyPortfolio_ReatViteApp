// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  {
    /* Hooks */
  }
  const [showAll, setShowAll] = useState(false);
  const [noMore, setNoMore] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const handleViewMore = () => {
    if (projectsData.length <= 3) {
      setNoMore(true);
      return;
    }
    setShowAll(!showAll);
    setNoMore(true);
  };

  return (
    <section id="projects" className="section-light">
      <div className="first-div-for-item-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="top-heading">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="top-p">A section of my recent work</p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Button + Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-12"
        >
          <button onClick={handleViewMore} className="MoreView-btn">
            {showAll ? "Show Less" : "View More Projects"}
          </button>

          {/* Message */}
          {noMore && <p className="p-Card">No more projects available</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
