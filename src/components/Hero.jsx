import React from "react";
import { motion } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";
import sunset from "../assets/sunset.svg";
import BgHero from "./BgHero";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Hero() {
  return (
    <section className="h-[120dvh] flex flex-col">
      <div>
        <div className="w-[30dvw] mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center pt-16 gap-8 uppercase tracking-[0.3rem] text-xs"
          >
            <motion.span variants={item} className="tracking-[0.4rem]">
              soulful
            </motion.span>
            <motion.img
              variants={item}
              src={sunset}
              alt="sunset"
              className="w-[14dvw] lg:w-[5svw]"
            />
            <motion.span variants={item}>island</motion.span>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, ease: "easeInOut", type: "spring" }}
          className="mx-auto w-[90dvw] md:w-[50dvw] text-center text-[3.5rem] lg:text-[4.5rem]"
        >
          Visit InfraLand
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, ease: "easeInOut", type: "spring" }}
          className="w-[80dvw] mt-8 lg:w-[34dvw] mx-auto text-center text-sm mb-8"
        >
          Located in a beautiful private island with pristine beaches and lush
          tropical greenery, offers a truly luxurious retreat with a genuine
          Maldivian style.
        </motion.p>
      </div>
      <hr className="mt-16" />
      <motion.div variants={container} initial="hidden" animate="visible" className="flex justify-between px-2 lg:px-6 items-center h-[4dvh] uppercase">
        <GiStarShuriken variants={item} className="text-[#F54460]" />
        <motion.span variants={item} className="text-xs tracking-wider lg:tracking-[0.3rem]">
          the sunny side of life
        </motion.span>
        <GiStarShuriken variants={item} className="text-[#F54460]" />
        <motion.span variants={item} className="text-xs tracking-wider lg:tracking-[0.3rem]">
          the sunny side of life
        </motion.span>
        <GiStarShuriken variants={item} className="text-[#F54460]" />
      </motion.div>
      <BgHero />
    </section>
  );
}

export default Hero;
