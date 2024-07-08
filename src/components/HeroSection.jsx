import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      <Image
        src="/intract-academy-background-5547a705.png"
        width={1705}
        height={806}
        alt="Background Image"
        className="object-cover object-center w-full h-[40vh] lg:h-full -z-20"
        priority
        unoptimized
      />

      <div className=" absolute top-[-48%] lg:top-[6%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%] flex flex-col justify-center items-center mix-blend-screen z-10 ">

        <div className="mix-blend-screen w-[235px]">
          <Image src="/academy-animated-logo-57b2ae61.gif"
            alt="Image"
            width={235}
            height={100}
          />
        </div>

        <div className="z-10 w-full flex items-center flex-col text-gray-300 text-center  ">
          <p className="text-slate-600 lg:text-[18px] w-[120%] lg:w-full font-medium leading-[24px] text-center mt-[22px]">
            <span className="text-white">Intract users</span> have together
            made more than <span className="text-white">$100 million</span> in
            web3.
            <br />
            Join them and{" "}
            <span className="text-white">learn how to earn crypto!</span>
          </p>

          <div className="mt-12">
            <div className="relative inline-flex px-[57px] py-2 justify-center items-center gap-[8px] w-full min-w-max rounded-[8px] bg-[#6435e9] cursor-pointer overflow-hidden">
              Get Started <FaArrowRight />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;
