import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const container = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.7,
      staggerChildren: 0.2,
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const item = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-[10svh] flex justify-between px-10 items-center border-b-2"
    >
      <motion.h1 variants={item} className="text-2xl font-bold">
        InfraLand
      </motion.h1>
      {/* Menu toggle button for small screens */}
      <button
        className="text-xl text-black lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Links for larger screens */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={`hidden lg:flex gap-10 cursor-pointer`}
      >
        <motion.li variants={item}>Villas & Suites</motion.li>
        <motion.li variants={item}>Activities</motion.li>
        <motion.li variants={item}>Dining</motion.li>
      </motion.ul>

      {/* Responsive mobile menu */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden flex-col absolute top-[10svh] left-0 w-full bg-white text-center gap-5 py-5`}
      >
        <motion.li variants={item} className="py-2 border-b">
          Villas & Suites
        </motion.li>
        <motion.li variants={item} className="py-2 border-b">
          Activities
        </motion.li>
        <motion.li variants={item} className="py-2 border-b">
          Dining
        </motion.li>
      </motion.ul>

      <motion.button
        variants={item}
        className="bg-[#F54460] flex items-center gap-2 px-2 py-1 rounded-sm text-[#F1F0ED]"
      >
        <MdAddCall /> +212 600 000000
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;
