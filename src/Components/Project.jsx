import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Project = () => {
  return (
    <section id="home" className="bg-[#152541] text-white py-16">
      <div className="mx-auto max-w-6xl px-5"></div>
      {/* Top heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-16 bg-clip-text">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="text-slate-300 mt-[-50px]">
          An section of my recent work
        </p>
      </motion.div>
    </section>
  );
};

export default Project;
