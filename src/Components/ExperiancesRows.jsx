import React, { useState } from "react"; // <-- useState added
import { motion } from "framer-motion";

const ExperiancesRows = ({ experience }) => {
  const [showAll, setShowAll] = useState(false);

  const visiblePoints = showAll
    ? experience.description
    : experience.description.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="bg-slate-900/70 border border-slate-600 rounded-xl p-6 shadow-lg">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          <h3 className="text-xl font-semibold text-white">
            {experience.role}
          </h3>
          <div className="px-3 py-1 rounded-full bg-slate-800/50">
            <span
              className="text-sm font-semibold bg-gradient-to-r 
                   from-purple-400 to-blue-400 
                   bg-clip-text text-transparent"
            >
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Company */}
        <p className="text-slate-300 mb-4">
          {experience.company} — {experience.location}
          <span className="text-slate-400"> ({experience.type})</span>
        </p>

        {/* Description list */}
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          {visiblePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* View More Button */}
        {experience.description.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-sm text-purple-400 hover:text-purple-300 transition"
          >
            {showAll ? "see less" : "see more"}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ExperiancesRows;
