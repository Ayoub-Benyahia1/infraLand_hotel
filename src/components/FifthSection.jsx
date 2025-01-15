import React, { useRef } from "react";
import { GiStarShuriken } from "react-icons/gi";
import landscape from "../assets/landscape-summer.jpg";
import secondeLandscape from "../assets/landscape.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function FifthSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const yImage = useTransform(scrollYProgress, [0.15, 0.4], [-150, 0]);
  const yText = useTransform(scrollYProgress, [0.15, 0.4], [200, 0]);
  const opacityMiddle = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const xLeftText = useTransform(scrollYProgress, [0.15, 0.4], [-100, 0]);
  const xRightText = useTransform(scrollYProgress, [0.15, 0.4], [100, 0]);
  const scaleCard = useTransform(scrollYProgress, [0.4, 0.65], [0.2, 1]);
  const opacityCard = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <section ref={ref} className="h-[210dvh] relative overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="h-[50dvh] flex flex-col lg:flex-row justify-evenly items-center border-b-2"
      >
        <span className="uppercase tracking-[0.3rem] lg:tracking-[0.5rem] my-5 lg:mt-0 flex items-center lg:mb-20">
          <GiStarShuriken className="text-[#F54460] w-14 lg:w-20" />
          gastronomy
        </span>
        <h1 className="text-3xl lg:text-6xl mb-5 lg:mb-0">
          Dining at
          <br />
          <span className="text-[#F54460] ml-10 lg:ml-20 mt-5">Infraland</span>
        </h1>
        <div className="w-[90%] lg:w-[35dvw]">
          <p className="text-sm">
            Offering a defferent cuisine and unique dining experiences,
            including Teppanyaki, Mediterranean fine dining and Asian flavors.
            In each restaurant, we use fresh organic ingrediants from our garden
            and local farms, that makes our food authentic and luxuriously
            delicious.
          </p>

          <p className="text-[#F54460] mt-4 lg:mt-8">Discover All</p>
        </div>
      </motion.div>
      <div className="h-[80dvh] flex flex-col lg:flex-row justify-evenly items-center">
        <div className="md:w-[50dvw] lg:w-[40dvw] p-4 lg:p-0 lg:flex lg:items-end lg:gap-6">
          <motion.div
            className="w-[100%] h-60 md:h-72 lg:w-[90dvw] lg:h-[40dvh] bg-contain bg-no-repeat"
            style={{
              y: yImage,
              opacity: opacityMiddle,
              backgroundImage: `url(${landscape})`,
            }}
          />
          <motion.p
            style={{ y: yText, opacity: opacityMiddle }}
            className="text-sm md:text-base md:mt-10 lg:mt-0"
          >
            Over-water localion where the warmth of the sun is tempered by a
            refreshing breeze.
          </motion.p>
        </div>
        <div className="w-[100%] md:w-[50dvw] lg:w-[40dvw] lg:h-[60dvh] p-5 gap-8 text-xl md:text-3xl lg:text-6xl flex flex-col">
          <motion.h1
            style={{ x: xLeftText, opacity: opacityMiddle }}
            className="text-sm tracking-[0.1rem] md:tracking-[0.5rem] uppercase"
          >
            dining experiences
          </motion.h1>
          <motion.h1 style={{ x: xRightText, opacity: opacityMiddle }}>
            Tepanyaki <span className="text-[#F54460]">Grill</span>
          </motion.h1>
          <motion.h1
            style={{ x: xLeftText, opacity: opacityMiddle }}
            className="flex gap-3 items-center"
          >
            <GiStarShuriken className="text-[#F54460] lg:w-10" />
            Ocean <span className="text-[#F54460]">Breeze</span>
          </motion.h1>
          <motion.h1 style={{ x: xRightText, opacity: opacityMiddle }}>
            Poolside <span className="text-[#F54460]">Restaurant</span>
          </motion.h1>
          <motion.h1 style={{ x: xLeftText, opacity: opacityMiddle }}>
            Beach <span className="text-[#F54460]">Barbecue</span>
          </motion.h1>
        </div>
      </div>
      <div
        className="h-[80dvh] bg-slate-200 bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${secondeLandscape})` }}
      >
        <div
          className="w-[100%] h-[100%] flex"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <motion.div
            style={{ scale: scaleCard, opacity: opacityCard }}
            className="w-[90dvw] h-[60dvh] md:w-[70dvw] md:h-[50dvh] lg:w-[50dvw] bg-white rounded-sm p-8 m-auto flex flex-col gap-8 lg:flex-row lg:gap-14"
          >
            <img
              src={secondeLandscape}
              alt="secondeLandscape"
              className="w-96 lg:w-[50%] lg:h-[100%] rounded-md"
            />
            <div className="lg:w-[50%] h-[100%] mt-2 lg:mt-0 flex flex-col justify-between gap-4">
              <h1 className="text-2xl lg:text-5xl">
                Location & <span className="text-[#F54460]">Getting here</span>
              </h1>
              <p className="text-slate-500 text-sm lg:text-base">
                Our atoll is often refered as the most beautiful region in the
                Maldives. All domestic transfers are arranged and booked by our
                reservations team.
              </p>
              <button className="w-48 h-10 m-auto lg:m-0 lg:w-[30%] lg:h-[15%] bg-[#F54460] text-white rounded-md">
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
