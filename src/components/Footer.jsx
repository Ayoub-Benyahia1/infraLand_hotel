import React from "react";
import { GiStarShuriken } from "react-icons/gi";

function Footer() {
  return (
    <section className="lg:h-[40dvh] bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-around text-xs lg:text-base uppercase tracking-[0.2rem]">
        <div className="w-[70%] lg:w-[30%] h-[22dvh] lg:h-auto flex flex-col lg:flex-row justify-evenly items-center lg:items-start mt-4 mx-auto lg:mx-0 lg:mt-16">
          <h1 className="flex items-center">
            <GiStarShuriken className="text-[#F54460] lg:w-8" />
            Connect
          </h1>
          <ul className="flex flex-col gap-4">
            <li>instagram</li>
            <li>twitter</li>
            <li>facebook</li>
            <li>email</li>
          </ul>
        </div>
        <div className="w-[70%] lg:w-[30%] h-[22dvh] lg:h-auto flex flex-col lg:flex-row justify-evenly items-center lg:items-start mt-4 mx-auto lg:mx-0 lg:mt-16">
          <h1 className="flex items-center">
            <GiStarShuriken className="text-[#F54460] lg:w-8" />
            infraland
          </h1>
          <ul className="flex flex-col gap-4 lg:ml-14">
            <li>mail@infraland.travel</li>
            <li>+960 684 4444</li>
            <li>magudhuva island, gaafu dhaalu atoll, republic of maldives</li>
          </ul>
        </div>
        <div className="w-[70%] lg:w-[30%] h-[22dvh] lg:h-auto flex flex-col lg:flex-row justify-evenly items-center lg:items-start mt-4 mx-auto lg:mx-0 lg:mt-16">
          <h1 className="flex items-center">
            <GiStarShuriken className="text-[#F54460] lg:w-8" />
            legal
          </h1>
          <ul className="flex flex-col gap-4">
            <li>terms & conditions</li>
            <li>privacy & policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
