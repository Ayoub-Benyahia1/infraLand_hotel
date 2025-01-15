import React, { useRef } from "react";
import leafPattern from "../assets/leaf-pattern.svg";
import leaf from "../assets/leaf.png";
import { GiStarShuriken } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";

function SecondSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const x2 = useTransform(scrollYProgress, [0.6, 0.8], [200, 0]);
  const x3 = useTransform(scrollYProgress, [0.9, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.65], [0.2, 1]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <motion.section
      ref={ref}
      className="h-[80dvh] lg:h-[90dvh]  overflow-hidden"
    >
      <div className="mt-10 h-[80%] md:h-[70dvh] relative border-t-2 border-b-2">
        <div className="flex">
          <motion.img
            style={{ x, scaleY: "-1" }}
            src={leafPattern}
            alt="leaf"
            className="absolute top-[-3dvh] md:top-[-6dvh] left-[-5dvw] w-[30dvw] md:w-[17dvw] scale-y-[-1]"
          />
          <motion.div
            style={{ scale, opacity }}
            className="mx-auto text-[1.7rem] md:text-[3.5rem] lg:text-[5rem] mt-[20dvh] md:mt-[10dvh]"
          >
            <h1>
              Luxurious <span className="text-[#F54460]">retreat</span> with
            </h1>
            <h1 className="ml-8 md:ml-14">
              a genuine <span className="text-[#F54460]">Maldivian</span> style
            </h1>
            <p className="w-[80dvw] md:w-[50dvw] text-xs md:text-xl mt-5 md:mt-10 mx-auto">
              A wide range of restaurants, large villas with private infinity
              pools, and our multiple award-winning AySpa make Ayada Maldives an
              excellent choice. Alarge variety of water sports, excursions and
              further activities are available for our guests.
            </p>
          </motion.div>
          <motion.img
            style={{ x: x2, scaleX: "-1" }}
            src={leaf}
            alt="leaf"
            className="absolute bottom-[-6dvh] lg:bottom-[-14dvh] right-[-6dvw] w-[30%] md:w-[17dvw] scale-x-[-1]"
          />
        </div>
        <motion.div style={{ x: x3 }} className="flex items-center gap-3 ml-10 mt-[10%] md:mt-32">
          <GiStarShuriken className="text-[#F54460]" />
          <span className="uppercase text-xs md:text-base tracking-[0.3rem] md:tracking-[0.5rem]">
            infraland
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SecondSection;
