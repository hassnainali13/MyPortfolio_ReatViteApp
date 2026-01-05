import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#112240] text-slate-200 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl italic font-semibold">
          <span className="text-[#8d25ee] text-2xl">Hassnain</span>{" "}
          <span className="text-slate-200">Ali</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item.toLowerCase())}
                className="relative font-medium text-slate-200 transition hover:text-[#8aa8ec]
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                           after:scale-x-0 after:bg-[#8aa8ec] after:transition hover:after:scale-x-100"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-[#112240] py-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item.toLowerCase())}
                className="text-slate-200 text-lg transition hover:text-[#8aa8ec]"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
