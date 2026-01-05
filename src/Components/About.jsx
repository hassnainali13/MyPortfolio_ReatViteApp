// import React from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <section id="about" className="bg-[#152541]  text-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-[#8d25ee]">About</span>{" "}
            <span className="text-slate-200">Me</span>
          </h2>
          <p className="mb-9 text-slate-300">
            Full Stack Developer skilled in React, Node.js, MongoDB.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:block w-[320px] sm:w-[360px]"
          >
            <div className="relative overflow-hidden ml-20 bg-slate-200 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-[180px] border-b-8 border-[#8d25ee] shadow-lg">
              <img
                src="src/image/About Hassnain.jpeg"
                alt="Hassnain"
                className="h-125 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 h-3 w-full bg-[#8d25ee]" />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:flex-1"
          >
            <h3 className="text-3xl font-semibold text-slate-100 mb-1">
              My Journey
            </h3>

            <p className="max-w-2xl !text-sm !leading-normal text-slate-100">
              Throughout my career, I’ve gained valuable experiences and
              achieved key milestones that have shaped my skills and passion for
              growth. Each step has pushed me to improve and make a meaningful
              impact, and I’m excited to continue this journey of development
              and success.
            </p>

            {/* Cards */}
            <div className="mt-8 grid max-w-95 grid-cols-2 gap-5">
              {/* Card 1 */}
              <div
                className="w-45 h-45 rounded-xl bg-[#192e52] p-4 shadow-md
               flex flex-col justify-start
               transition hover:-translate-y-1 hover:bg-[#222141]"
              >
                <i className="bi bi-lightbulb-fill text-xl text-[#8d25ee]" />

                <h4 className="mb-2 text-sl font-semibold text-slate-100">
                  Innovative
                </h4>

                <p className="mt-0 !text-[13px] leading-snug text-slate-300">
                  I love creating unique solutions to complex problems using
                  modern technologies.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="w-45 h-45 rounded-xl bg-[#192e52] p-4 shadow-md
               flex flex-col justify-start
               transition hover:-translate-y-1 hover:bg-[#222141]"
              >
                <i className="bi bi-brush-fill text-xl text-[#8d25ee]" />

                <h4 className="mb-2 text-sl font-semibold text-slate-100">
                  Design Oriented
                </h4>

                <p className="mt-0 !text-[13px] leading-snug text-slate-300">
                  Beautiful design and user experience are central to everything
                  I create.
                </p>
              </div>

              {/* Card 3 (neeche left) */}
              <div
                className="w-45 h-45 rounded-xl bg-[#192e52] p-4 shadow-md
               flex flex-col justify-start
               transition hover:-translate-y-1 hover:bg-[#222141] col-start-1"
              >
                <i className="bi bi-code-slash text-xl text-[#8d25ee]" />

                <h4 className="mb-2 text-sl font-semibold text-slate-100">
                  Clean Code
                </h4>

                <p className="mt-0 !text-[13px] leading-snug text-slate-300">
                  I write clean, maintainable code following modern best
                  practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
