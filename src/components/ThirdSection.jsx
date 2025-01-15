import React, { useRef } from "react";
import sunset from "../assets/sunset.svg";
import bgImage from "../assets/maldives-resort-hotel-and-island-.jpg";
import { GiStarShuriken } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";

function ThirdSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0.2, 0.4], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 0.7], [0.1, 1]);
  const y1stText = useTransform(scrollYProgress, [0.45, 0.6], [-100, 0]);
  const y2ndText = useTransform(scrollYProgress, [0.45, 0.6], [100, 0]);
  const opacityText = useTransform(scrollYProgress, [0.47, 0.6], [0, 1]);
  const xBottomText = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const opacityBottom = useTransform(scrollYProgress, [0.8, 1], [0, 1])

  return (
    <motion.section
      ref={ref}
      className="h-[100dvh] flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:px-10 bg-cover bg-no-repeat p-5"
    >
      <motion.div
        className="w-[80dvw] md:w-[60dvw] lg:w-[46dvw] h-[33dvh] lg:h-[80dvh] rounded-md flex"
        style={{ y, opacity, backgroundImage: `url(${bgImage})` }}
      >
        <motion.div
          style={{ scale }}
          className="w-[80%] lg:w-[85%] h-[90%] lg:h-[45%] bg-white m-auto rounded-md p-4 lg:p-8 flex flex-col justify-between"
        >
          <img src={sunset} alt="sunset" className="w-[8dvw] lg:w-[3dvw]" />
          <h1 className="uppercase text-md tracking-[0.1rem] lg:tracking-[0.3rem]">
            sunset ocean suites
          </h1>
          <p className="w-[98%] lg:w-[65%] text-xs text-slate-500">
            Offering absoluteluxury and security over the Indian Ocean, our
            water villa suites called Sunset Ocean Suites.
          </p>
          <span className="text-[#F54460]">Check Availability</span>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="w-[80dvw] md:w-[60dvw] lg:w-[24dvw] h-[33dvh] lg:h-[80dvh] p-4 lg:p-8 bg-white border-2 rounded-md flex flex-col justify-between overflow-hidden"
      >
        <div className="text-3xl lg:text-6xl">
          <motion.h1 style={{ y: y1stText, opacity: opacityText }}>
            Royal
          </motion.h1>
          <motion.h1
            style={{ y: y2ndText, opacity: opacityText }}
            className="text-[#F54460]"
          >
            Ocean
          </motion.h1>
        </div>
        <div className="flex gap-4 lg:gap-16">
          <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          <motion.p style={{ x: xBottomText, opacity: opacityBottom }} className="text-sm">
            Providing a 180 degrees view in the Indian Ocean and the horizon
            with absolute privacy.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="w-[80dvw] md:w-[60dvw] lg:w-[24dvw] h-[33dvh] lg:h-[80dvh] p-4 lg:p-8 bg-white border-2 rounded-md flex flex-col justify-between overflow-hidden"
      >
        <div className="text-3xl lg:text-6xl">
          <motion.h1 style={{ y: y1stText, opacity: opacityText }}>
            Beach
          </motion.h1>
          <motion.h1
            style={{ y: y2ndText, opacity: opacityText }}
            className="text-[#F54460]"
          >
            Villa
          </motion.h1>
        </div>
        <div className="flex gap-4 lg:gap-16">
          <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          <motion.p style={{ x: xBottomText, opacity: opacityBottom }} className="text-sm">
            Beach Villas are located on the idyllic stretches of the white sandy
            beaches.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ThirdSection;
