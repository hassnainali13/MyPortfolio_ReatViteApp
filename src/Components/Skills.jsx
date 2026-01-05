import React from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import FrontendLogo from "../assets/FrontendLogo.svg";
import BackendLogo from "../assets/backend icons.svg";
import DatabaseLogo from "../assets/DatabseLogo.svg";
import TailwindLogo from "../assets/TailwindcssLogo.svg";
import TestingLogo from "../assets/SoftwereTestLogo.svg";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#152541]  text-white py-16">
      <div className="mx-auto max-w-6xl px-5"></div>
      {/* Top heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" bg-linear-to-b from-slate-900 to-slate-950 py-24"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-16 bg-clip-text">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          {/* Card */}
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:border-blue-500 transition">
            <img
              src={FrontendLogo}
              alt="React"
              className="w-10 h-8.5 float-left mr-2"
            />
            <h3 className="text-xl font-semibold text-white mb-5 ">
              Frontend Development
            </h3>
            <p className="P-Card">
              I build responsive and clean user interfaces using HTML, CSS,
              JavaScript, and React.js. I focus on reusable components and
              simple UI logic.
            </p>
            <div className="ml-1 grid grid-cols-3 gap-2 mr-10 mt-2">
              <div className=" text-slate-400 rounded-[50px] border w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                React
              </div>
              <div className=" text-slate-400 rounded-[50px] border w-20 h-7 border-slate-600  pb-1  pl-0 align-center flex items-center justify-center">
                HTML
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                CSS
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-25 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                JavaScript
              </div>
              <div className=" text-slate-400 rounded-[50px] border ml-5.5 w-38 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Responsive Design
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:border-blue-500 transition">
            <img
              src={BackendLogo}
              alt="React"
              className="w-10 h-8.5 float-left mr-2 "
            />
            <h3 className="text-xl font-semibold text-white  mb-5 ">
              Backend & Programming
            </h3>

            <p className="P-Card">
              I have basic experience with backend development using Node.js,
              Express.js, and ASP.NET MVC. I work with SQL Server for data
              handling.
            </p>
            <div className="ml-1 grid grid-cols-3 gap-2 mr-10 mt-2">
              <div className=" text-slate-400 rounded-[50px] border w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                C++
              </div>
              <div className=" text-slate-400 rounded-[50px] border w-20 h-7 border-slate-600  pb-1  pl-0 align-center flex items-center justify-center">
                Python
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Node.js
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-25 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Express.js
              </div>
              <div className=" ml-5 text-slate-400 rounded-[50px] border  w-30 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                ASP.NET MVC
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:border-blue-500 transition">
            <img
              src={DatabaseLogo}
              alt="React"
              className="w-10 h-8.5 float-left mr-2 "
            />
            <h3 className="text-xl font-semibold text-white  mb-5 ">
              Databases
            </h3>
            <p className="P-Card">
              I use SQL Server and MongoDB to store and manage application data.
              I understand basic CRUD operations and database structure.
            </p>
            <div className="ml-1 grid grid-cols-3 gap-2 mr-10 mt-2 ">
              <div className=" text-slate-400 rounded-[50px] border w-25 h-7 border-slate-600 pb-1  pl-0   align-center flex items-center justify-center">
                MongoDB
              </div>
              <div className=" text-slate-400 rounded-[50px] border w-25 h-7 border-slate-600 pb-1 ml-5 pl-0pb-1  pl-0 align-center flex items-center justify-center">
                SQL Server
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:border-blue-500 transition">
            <img
              src={TestingLogo}
              alt="React"
              className="w-10 h-8.5 float-left mr-2 "
            />
            <h3 className="text-xl font-semibold text-white  mb-5 ">
              Software Testing (SQA)
            </h3>

            <p className="P-Card mb-4 flex-grow">
              I perform manual testing and write test cases to ensure software
              quality. I also have basic exposure to automated testing and
              CI/CD.
            </p>
            <div className="ml-1 grid grid-cols-2 gap-2 mr-10 mt-2">
              <div className=" text-slate-400 rounded-[50px] border w-30 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Manual Testing
              </div>
              <div className=" text-slate-400 rounded-[50px] border w-39 h-7 border-slate-600  pb-1  pl-0 align-center flex items-center justify-center">
                Automated Testing
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-25 h-7 border-slate-600 pb-1 pl-0 align-center flex items-center justify-center">
                Test Cases
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-33 h-7 border-slate-600 pb-1.5 ml-[-20px] pl-0 align-center flex items-center justify-center">
                Bug Reporting
              </div>
              <div className=" ml-0 text-slate-400 rounded-[50px] border  w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                CI/CD
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:border-blue-500 transition">
            <img
              src={TailwindLogo}
              alt="React"
              className="w-10 h-8.5 float-left  mr-2"
            />
            <h3 className="text-xl font-semibold text-white  mb-5 ">
              Tailwind CSS
            </h3>

            <p className="P-Card">
              I use Tailwind CSS to design modern and responsive layouts
              efficiently. I work with utility classes, Flexbox, and basic
              layout structure.
            </p>
            <div className="ml-1 grid grid-cols-2 gap-2 mr-10 mt-2">
              <div className=" text-slate-400 rounded-[50px] border w-30 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Tailwind CSS
              </div>
              <div className=" text-slate-400 rounded-[50px] border w-28 h-7 border-slate-600  pb-1  pl-0 align-center flex items-center justify-center">
                Responsive
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-20 h-7 border-slate-600 pb-1  pl-0 align-center flex items-center justify-center">
                Flexbox
              </div>
              <div className=" text-slate-400 rounded-[50px] border  w-25 h-7 border-slate-600 pb-1 ml-[-40px] pl-0 align-center flex items-center justify-center">
                Layout
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
