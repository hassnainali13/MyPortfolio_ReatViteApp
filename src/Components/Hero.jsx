import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-r from-[#152541] via-[#365791] to-[#152541] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-10 lg:flex-row lg:justify-between"
      >
        {/* LEFT CONTENT */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          <h1 className="mt-9 text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I'm <span className="text-[#8d25ee]">Hassnain Ali</span>
          </h1>

          {/* Animated Title line */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={[
              "mt-6 inline-block overflow-hidden whitespace-nowrap border-r-4 border-[#8d25ee]",
              "text-2xl sm:text-3xl",
              "transition-[width] duration-[3500ms] ease-out",
              isVisible ? "w-[320px] sm:w-[300px]" : "w-0",
            ].join(" ")}
          >
            Frontend Developer
          </motion.h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            I'm a Full Stack Developer skilled in React, Node.js, and MongoDB. I
            focus on creating efficient, user-friendly web applications that
            solve real-world problems. Let's build something amazing together!
          </p>

          <div className="btn">
            <a href="#projects" className="btn-Background">
              View My Work
            </a>

            <a href="#contact" className="btn-Border">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="flex h-[280px] w-[280px] items-center justify-center rounded-full border-b-4 border-[#8d25ee] p-3 sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]">
            <img
              src="src/assets/Profile/Hassnain Ali Profile.jpeg"
              alt="Hassnain Ali"
              className="h-full w-full rounded-full object-cover ring-2 ring-slate-200/70"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
