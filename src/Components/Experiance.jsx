import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperiancesRows from "./ExperiancesRows";
import { experienceData } from "../data/experiancesData";

const Experiance = () => {
  const [showAll, setShowAll] = useState(false);
  const [noMore, setNoMore] = useState(false);

  // visible experience logic
  const visibleExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 1);

  const handleViewMore = () => {
    // agar 3 ya us se kam hain
    if (experienceData.length <= 1) {
      setNoMore(true);
      return;
    }

    setShowAll(!showAll);
    setNoMore(false);
  };

  return (
    <section id="experience" className="section-dark">
      <div className="first-div">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 "
        >
          <h2 className="top-heading">
            My <span className="text-purple-500">Experience</span>
          </h2>
          <p className="top-p">Professional & academic journey</p>
        </motion.div>

        {/* Experience Rows */}
        <div className="exp-grid">
          {visibleExperiences.map((exp) => (
            <ExperiancesRows key={exp.id} experience={exp} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-12"
        >
        {/* View More Button */}
        <button onClick={handleViewMore} className="MoreView-btn">
          {showAll ? "Show Less" : "View More Experiances"}
        </button>

        {/* Message */}
        {noMore && (
          <p className="p-Card ">
            No more experience available
          </p>
        )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiance;
