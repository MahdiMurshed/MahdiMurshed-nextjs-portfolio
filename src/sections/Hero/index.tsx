import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Hero = () => {
  return (
    <section className="min-h-screen lg:flex">
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default Hero;
