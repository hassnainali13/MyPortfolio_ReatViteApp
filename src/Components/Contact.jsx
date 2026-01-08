import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState("idle"); // idle | sending | success

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    const formData = new FormData(form.current);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setButtonState("success");
      form.current.reset();

      setTimeout(() => setButtonState("idle"), 3000);
    } catch (error) {
      console.error(error);
      setButtonState("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  const renderButtonContent = () => {
    switch (buttonState) {
      case "sending":
        return "Sending...";
      case "success":
        return (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center animate-bounce">
              <svg
                className="w-3 h-3 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Sent!
          </span>
        );
      default:
        return "Send message";
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#152541] to-slate-950 p-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-2">
            Get In <span className="text-purple-600">Touch</span>
          </h3>
          <p className="text-gray-400">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Form */}
          <div className="flex-1">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-Box"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input-Box"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-Box h-32 resize-none"
                required
              />
              <button
                type="submit"
                disabled={buttonState === "sending"}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-md transition"
              >
                {renderButtonContent()}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col gap-6 text-white">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <p className="text-gray-400">Malir, Karachi, Pakistan</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-600" />
              <p className="text-gray-400">hassnainali96788@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-600" />
              <p className="text-gray-400">+92 320 1219245</p>
            </div>
            <div className="flex gap-4 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/hassnain-ali-52ba09295/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/hassnainali13"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
