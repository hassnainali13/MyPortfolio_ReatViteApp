// src/data/projectsData.js
import crudImg from "../assets/Images for project in portfolio/crud.webp";
import MCQs_Project from "../assets/Images for project in portfolio/multiple-choice-quiz-template_515038-15211.avif";
import Bus_ticket from "../assets/Images for project in portfolio/Bus-ticket-Management-System.avif";
import Ai_Bot_Project from "../assets/Images for project in portfolio/Ai_Bot_Project.png"
export const projectsData = [
  {
    id: 1,
    image: Ai_Bot_Project,
    title: "DocuMind AI",
    description:
      "An AI-powered document chatbot that lets users upload files and ask questions, providing smart, real-time answers through a clean and user-friendly interface.",
    tags: [
      "React-Vite",
      "TailwindCSS",
      "JavaScript",
      "Node.js + Express",
      "MongoDB",
      "Google Gemini API",
    ],
    demoLink: "https://ai-bot-frontend-pi.vercel.app/",
    codeLink: "https://github.com/hassnainali13/Ai-Bot.git",
  },
  {
    id: 2,
    image: crudImg,
    title: "CRUD App",
    description:
      "This repository contains a MERN stack application with Node.js backend and React frontend. It supports CRUD operations for products.",
    tags: ["React", "Node js", "MongoDB", "Express js"],
    demoLink: "https://product-crud-app1.vercel.app/",
    codeLink: "https://github.com/hassnainali13/product-crud-app1.git",
  },

  {
    id: 3,
    image: MCQs_Project,
    title: "Quizify – Online Quiz Web Application",
    description:
      "An interactive quiz application with user authentication, profile image upload, dynamic MCQs, score calculation and responsive UI using pure JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    demoLink: "#",
    codeLink:
      "https://github.com/hassnainali13/Task2-Quizify-online-quiz-website.git",
  },
  {
    id: 4,
    image: Bus_ticket,
    title: "Bus-ticket-Management-System",
    description:
      "Bus Ticket Management System with OOP concepts, seat booking, route management, and user-friendly interface developed as a 2-semester university project.",
    tags: ["C++ Programing", "OPPs"],
    demoLink: "#",
    codeLink:
      "https://github.com/hassnainali13/Bus-ticket-Management-System-Project.git",
  },

  // Aap aur projects bhi add kar sakte ho
];
