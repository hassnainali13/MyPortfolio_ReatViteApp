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
    <section id="skills" className="section-dark">
      <div className="first-div-for-item-center">
        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="top-heading">
            My <span className="text-purple-500">Skills</span>
          </h2>

          {/* Skills Grid */}
          <div className="skills-Card-Grid">
            {/* Card */}
            <div className="skill-Cards">
              <span className="skills-h3-grid">
                <img src={FrontendLogo} alt="React" className="skills-Logo" />
                <h3 className="Skill-card-h3 ">Frontend Development</h3>
              </span>
              <p className="P-Card">
                I build responsive and clean user interfaces using HTML, CSS,
                JavaScript, and React.js. I focus on reusable components and
                simple UI logic.
              </p>
              <div className="tag-div">
                <div className=" tag">React</div>
                <div className=" tag">HTML</div>
                <div className=" tag">CSS</div>
                <div className=" tag">JavaScript</div>
                <div className=" tag">Responsive Design</div>
              </div>
            </div>

            <div className="skill-Cards">
              <span className="skills-h3-grid">
                <img src={BackendLogo} alt="React" className="skills-Logo " />
                <h3 className="Skill-card-h3">Backend & Programming</h3>
              </span>

              <p className="P-Card">
                I have basic experience with backend development using Node.js,
                Express.js, and ASP.NET MVC. I work with SQL Server for data
                handling.
              </p>
              <div className="tag-div">
                <div className="tag">C++</div>
                <div className="tag">Python</div>
                <div className="tag">Node.js</div>
                <div className=" tag">Express.js</div>
                <div className=" tag">ASP.NET MVC</div>
              </div>
            </div>

            <div className="skill-Cards">
              <span className="skills-h3-grid">
                <img src={DatabaseLogo} alt="React" className="skills-Logo " />
                <h3 className="Skill-card-h3 ">Databases</h3>
              </span>
              <p className="P-Card">
                I use SQL Server and MongoDB to store and manage application
                data. I understand basic CRUD operations and database structure.
              </p>
              <div className="tag-div">
                <div className=" tag">MongoDB</div>
                <div className=" tag">SQL Server</div>
              </div>
            </div>

            <div className="skill-Cards">
              <span className="skills-h3-grid">
                <img src={TestingLogo} alt="React" className="skills-Logo " />
                <h3 className="Skill-card-h3 ">Software Testing (SQA)</h3>
              </span>

              <p className="P-Card">
                I perform manual testing and write test cases to ensure software
                quality. I also have basic exposure to automated testing and
                CI/CD.
              </p>
              <div className="tag-div">
                <div className=" tag">Manual Testing</div>
                <div className=" tag">Automated Testing</div>
                <div className=" tag">Test Cases</div>
                <div className="tag">Bug Reporting</div>
                <div className=" tag">CI/CD</div>
              </div>
            </div>

            <div className="skill-Cards">
              <span className="skills-h3-grid">
                <img src={TailwindLogo} alt="React" className="skills-Logo" />
                <h3 className="Skill-card-h3">Tailwind CSS</h3>
              </span>

              <p className="P-Card">
                I use Tailwind CSS to design modern and responsive layouts
                efficiently. I work with utility classes, Flexbox, and basic
                layout structure.
              </p>
              <div className="tag-div">
                <div className=" tag">Tailwind CSS</div>
                <div className="tag">Responsive</div>
                <div className="tag ">Flexbox</div>
                <div className=" tag">Layout</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
