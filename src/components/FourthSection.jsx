import React, { useRef } from "react";
import { GiStarShuriken } from "react-icons/gi";
import leafPattern from "../assets/leaf-pattern.svg";
import leaf from "../assets/leaf.png";
import landscape from "../assets/landscape-summer.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function FourthSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.05, 0.3], [-100, 0]);
  const y = useTransform(scrollYProgress, [0.05, 0.3], [-100, 0]);
  const y1stCard = useTransform(scrollYProgress, [0.05, 0.3], [100, 0]);
  const xImage = useTransform(scrollYProgress, [0.05, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleBackground = useTransform(scrollYProgress, [0, 0.25], [0.4, 1])
  const y2ndCard = useTransform(scrollYProgress, [0.25, 0.5], [200, 0])
  const y3rdCard = useTransform(scrollYProgress, [0.25, 0.6], [200, 0])
  const opacityCards = useTransform(scrollYProgress, [0.2, 0.55], [0, 1])
  const xLastImage = useTransform(scrollYProgress, [0.3, 0.7], [-150, 0])
  const yLastImage = useTransform(scrollYProgress, [0.3, 0.7], [150, 0])
  const opacityImage = useTransform(scrollYProgress, [0.3, 0.65], [0, 1])

  return (
    <section
      ref={ref}
      className="h-[140dvh] lg:h-[160dvh] border-t-2 border-b-2 relative overflow-hidden"
    >
      <div className="h-[40dvh] lg:flex lg:justify-between lg:items-center">
        <motion.span
          style={{ x, opacity }}
          className="uppercase tracking-[0.3rem] md:tracking-[0.5rem] mt-10 lg:mt-0 flex items-center mb-16"
        >
          <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          experiences
        </motion.span>
        <motion.h1
          style={{ y, opacity }}
          className="text-2xl lg:text-6xl flex flex-col items-center"
        >
          Unforgetable
          <br />
          <span className="text-[#F54460] ml-20 mt-2">Experiences</span>
        </motion.h1>
        <div className="w-[95%] lg:w-[40dvw] lg:flex justify-evenly relative">
          <motion.img
            style={{ x: xImage, opacity, scaleX: "-1", scaleY: "-1" }}
            src={leafPattern}
            alt="leaf"
            className="absolute top-5 lg:top-[-35dvh] right-[-10dvw] w-[25dvw] scale-y-[-1] scale-x-[-1] z-20"
          />
          <motion.div
            style={{ y: y1stCard, opacity }}
            className="w-[90dvw] h-[30vh] md:w-[68dvw] lg:w-[25dvw] lg:h-[55dvh] border-2 bg-white rounded-md absolute bottom-[-35dvh] lg:bottom-[-47dvh] left-5 md:left-[18dvw] lg:left-20 p-4 lg:p-8 flex flex-col justify-between z-10"
          >
            <h1 className="text-3xl md:text-6xl">
              Water <br /> <span className="text-[#F54460]">Sports</span>
            </h1>
            <div className="flex gap-4 lg:gap-14">
              <p className="text-sm">
                Beach Villas are located on the idyllic stretches of the white
                sandy beaches.
              </p>
              <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="h-[80dvh] bg-left-bottom bg-no-repeat lg:flex items-end justify-around relative"
        style={{ scale: scaleBackground, backgroundImage: `url(${landscape})` }}
      >
        <motion.div style={{ y: y2ndCard, opacity: opacityCards }} className="w-[90dvw] h-[30dvh] md:w-[68dvw] lg:w-[25dvw] lg:h-[55dvh] border-2 bg-[#24394C] rounded-md p-4 lg:p-8 flex flex-col justify-between absolute bottom-56 left-5 md:top-48 md:left-36 lg:bottom-[-14dvh] lg:left-[15dvw]">
          <h1 className="text-3xl text-white md:text-6xl">
            Intimate <br /> <span className="text-[#F54460]">Weedings</span>
          </h1>
          <div className="flex gap-4 lg:gap-14">
            <p className="text-sm text-white">
              We have included all essentials that make a beautiful wedding.
            </p>
            <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          </div>
        </motion.div>
        <motion.div style={{ y: y3rdCard, opacity: opacityCards }} className="w-[90%] h-[30dvh] md:w-[68dvw] lg:w-[25dvw] lg:h-[55dvh] border-2 bg-white rounded-md  p-8 flex flex-col justify-between absolute  bottom-[-5dvh] right-5 md:right-[14dvw] lg:bottom-[-35dvh]">
          <h1 className="text-3xl md:text-6xl">
            Reef <br /> <span className="text-[#F54460]">Snorkeling</span>
          </h1>
          <div className="flex gap-4 lg:gap-14">
            <p className="text-sm">
              Our house reef is one of the best in the country. Let one of our
              guides take you to explore its beauty.
            </p>
            <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          </div>
        </motion.div>
      </motion.div>
      <motion.img
        style={{ x:xLastImage, y:yLastImage, opacity: opacityImage }}
        src={leaf}
        alt="leaf"
        className="absolute bottom-0 lg:bottom-[-10dvh] left-[-5dvw] w-[20dvw] lg:w-[20dvw] "
      />
    </section>
  );
}

export default FourthSection;
