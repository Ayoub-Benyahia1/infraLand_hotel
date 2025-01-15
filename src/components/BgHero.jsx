import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/tropical-beach-in-maldives.jpg";
import { GiStarShuriken } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

const container = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      delayChildren: 1.7,
      staggerChildren: 0.2,
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function BgHero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden h-[calc(120dvh-40dvh)] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <motion.div
          variants={item}
          className="w-[90%] lg:w-[40%] bg-white p-5 m-auto"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Find nearby places</h1>
            <GiStarShuriken className="text-[#F54460]" />
          </div>
          <p className="text-[0.65rem] my-2">
            Enhances the experience of finding places
          </p>
          <div className="flex justify-between mt-6 px-1">
            <input
              type="date"
              className="border-2  w-[45%] lg:w-[40%]"
              placeholder="3 Apr - 4 Apr"
            />
            <div className="relative w-[45%] lg:w-[40%]">
              <IoPersonOutline className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className="border-2 w-full pl-8 pr-2 py-1"
                placeholder="Person"
                min={0}
              />
            </div>
          </div>
          <button className="bg-[#F54460] w-full h-[4dvh] text-white text-sm rounded-md mt-6">
            Check Availability
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BgHero;
