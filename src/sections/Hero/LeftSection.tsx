import { TypingText } from "@components/CustomTexts";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeIn, planetVariants, staggerContainer } from "src/lib/motion";

const LeftSection = () => {
  return (
    <div className="flex-1 h-screen flex flex-col justify-between align-center w-full p-32 sticky overflow-visible">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div>
          <motion.div variants={planetVariants("left")}>
            <div className="rounded-full w-20 h-20 relative overflow-hidden mt-20 md:h-40 md:w-40">
              <Image
                src="https://github.com/MahdiMurshed.png"
                alt="Mahdi"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <h1 className="text-6xl leading-tight font-bold">Mahdi Murshed</h1>
          </motion.div>
          <div className="mt-4 sm:text-3xl text-[24px] font-semibold leading-tight">
            <TypingText title="| Software Engineer" />
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <p className="leading-loose mt-8 text-s-txt text-xl">
              Mahdi Murshed is a computer science undergraduate at Shahjalal
              University of Science and Technology, with professional experience
              in building websites using technologies such as React, TypeScript,
              and NextJS.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftSection;
