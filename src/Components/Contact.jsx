import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState("idle"); // idle, sending, success

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setButtonState("success");
        e.target.reset();
        setTimeout(() => setButtonState("idle"), 3000);
      } else {
        setButtonState("idle");
        alert("Failed to send message, try again.");
      }
    } catch (err) {
      console.error(err);
      setButtonState("idle");
      alert("Failed to send message, try again.");
    }
  };

  const renderButtonContent = () => {
    switch (buttonState) {
      case "sending":
        return "Sending...";
      case "success":
        return (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
    <section id="contact" className="bg-gradient-to-b from-[#152541] to-slate-950 p-16">
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

        <div className="Contect-grid flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side - Form */}
          <div className="Messages-side flex-1">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full bg-gray-800 text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full bg-gray-800 text-white p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className={`btn-Background text-center p-3 rounded-md transition text-white font-semibold flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700`}
              >
                {renderButtonContent()}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div className="contactDetail-side flex-1 flex flex-col justify-start gap-6 text-white">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Malir, Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">hassnainali96788@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+92 (320) 121-9245</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-semibold mb-2">Follow Me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/hassnain-ali-52ba09295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/hassnainali13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
