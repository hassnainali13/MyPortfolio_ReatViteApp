import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#112240] text-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl italic font-semibold">
          <span className="text-[#8d25ee] text-2xl">Hassnain</span>{" "}
          <span className="text-slate-200">Ali</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 md:flex">
          {["Home", "About", "Projects", "Contact", "Skills", "Experience"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative font-medium transition text-slate-200 hover:text-[#8aa8ec]
                             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                             after:scale-x-0 after:bg-[#8aa8ec] after:transition
                             hover:after:scale-x-100"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-[#112240] py-6">
          {["Home", "About", "Projects", "Contact", "Skills", "Experience"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 text-lg transition hover:text-[#8aa8ec]"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
