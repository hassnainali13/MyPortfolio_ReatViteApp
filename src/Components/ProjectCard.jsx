// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-full" // 🔑 important
    >
      <div className="bg-slate-900/70 border border-slate-600 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="h3-Card">{project.title}</h3>

          <p className="P-Card">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons (always bottom) */}
          <div className="btn mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              className="btn-Background"
            >
              Demo
            </a>
            <a href={project.codeLink} target="blank" className="btn-Border">
              Code View
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
