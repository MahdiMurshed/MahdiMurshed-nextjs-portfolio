import Experience from "@sections/Experience";
import Other from "@sections/Other";
import Projects from "@sections/Projects";
import React, { useEffect, useMemo, useRef, useState } from "react";

const labels = ["projects", "experiences", "others"];

const RightSection = () => {
  const handleNavigation = (e: any, label: string) => {
    e.preventDefault();
    const element = document.getElementById(label);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 overflow-y-scroll md:h-screen">
      <nav className="flex justify-end items-center p-2 sticky top-0 bg-p-bg">
        <ul className="flex gap-10 text-2xl font-bold uppercase justify-end">
          {labels.map((label, i) => (
            <li
              key={label}
              className="cursor-pointer hover:text-cyan-400 hover:scale-110 transition-all"
              onClick={(e) => handleNavigation(e, label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
      <Projects />
      <Experience />
      <Other />
    </div>
  );
};

export default RightSection;
