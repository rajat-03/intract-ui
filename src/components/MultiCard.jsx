import Image from "next/image";
import React from "react";
import { PiVideoFill } from "react-icons/pi";

const MultiCard = () => {
  return (
    <div className="mt-5">
      <div className="max-w-[1200px] mx-auto container py-8 px-[10px] text-white  opacity-100">
        <div className="flex flex-col justify-center items-center  font-normal  tracking-[0.117px] gap-2">
          <div class="text-[24px] leading-8">
            Top Crypto Creators and Projects to Follow
          </div>
          <div class="text-center text-[16px] leading-5 text-[#7d7d7d]">
            Answers to you crypto doubts, straight from the experts
          </div>
        </div>

        {/* card group */}
        <div className="mt-10 flex flex-wrap gap-4 mb-5 justify-center">
          {/* card 1 */}
          <div className=" w-[85vw] h-[60vh] sm:w-[283px] sm:h-[420px] rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] flex flex-col justify-between relative overflow-hidden">
            <div class="block w-full h-full">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <PiVideoFill className="text-xl opacity-80" />
              </div>


              <Image
                src="/cat.png "
                alt="How to plan your retirement with crypto?"
                width={281}
                height={100}
                className="absolute bottom-[-60px] left-0 z-[1] w-full h-[100px] filter blur-[15px] object-bottom transform scale-[3]"
              />
              <Image
                src="/cat.png "
                alt="How to plan your retirement with crypto?"
                width={281}
                height={418}
                className="w-full h-full object-cover"
              />


              <div className="text-[#fff9] text-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] mix-blend-plus-lighter overflow-hidden text-ellipsis line-clamp-3 z-[2]">
                How to plan your retirement with crypto?
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className=" w-[85vw] h-[60vh] sm:w-[283px] sm:h-[420px] rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] flex flex-col justify-between relative overflow-hidden">
            <div class="block w-full h-full">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <PiVideoFill className="text-xl opacity-80" />
              </div>

              {/* play button comes */}
              {/* <span className="inline-flex justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-1/2 left-1/2 text-[36px] h-[60px] w-[60px] transform -translate-x-1/2 translate-y-[5px] cursor-pointer opacity-0 transition-transform transition-opacity duration-300 ease duration-500 ease">
                                <i class="bi bi-play-fill mt-1 ml-1"></i>
                              
                            </span> */}

              <img
                src="/frog.png "
                alt="How to plan your retirement with crypto?"
                className="absolute bottom-[-60px] left-0 z-[1] w-full h-[100px] filter blur-[15px] object-bottom transform scale-[3]"
              />
              <img
                src="/frog.png"
                alt="How to plan your retirement with crypto?"
                class="w-full h-full object-cover"
              />
              <div className="text-[#fff9] text-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] mix-blend-plus-lighter overflow-hidden text-ellipsis line-clamp-3 z-[2]">
                How to plan your retirement with crypto?
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className=" w-[85vw] h-[60vh] sm:w-[283px] sm:h-[420px] rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] flex flex-col justify-between relative overflow-hidden">
            <div class="block w-full h-full">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <PiVideoFill className="text-xl opacity-80" />
              </div>

              {/* play button comes */}
              {/* <span className="inline-flex justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-1/2 left-1/2 text-[36px] h-[60px] w-[60px] transform -translate-x-1/2 translate-y-[5px] cursor-pointer opacity-0 transition-transform transition-opacity duration-300 ease duration-500 ease">
                                <i class="bi bi-play-fill mt-1 ml-1"></i>
                              
                            </span> */}

              <img
                src="/horse.png "
                alt="How to plan your retirement with crypto?"
                className="absolute bottom-[-60px] left-0 z-[1] w-full h-[100px] filter blur-[15px] object-bottom transform scale-[3]"
              />
              <img
                src="/horse.png"
                alt="How to plan your retirement with crypto?"
                class="w-full h-full object-cover"
              />
              <div className="text-[#fff9] text-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] mix-blend-plus-lighter overflow-hidden text-ellipsis line-clamp-3 z-[2]">
                How to plan your retirement with crypto?
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className=" w-[85vw] h-[60vh] sm:w-[283px] sm:h-[420px] rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] flex flex-col justify-between relative overflow-hidden">
            <div class="block w-full h-full">
              <div className="flex w-[40px] h-[40px] p-[8px] justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-[16px] right-[16px] cursor-pointer">
                <PiVideoFill className="text-xl opacity-80" />
              </div>

              {/* play button comes */}
              {/* <span className="inline-flex justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.4)] backdrop-blur-[20px] absolute top-1/2 left-1/2 text-[36px] h-[60px] w-[60px] transform -translate-x-1/2 translate-y-[5px] cursor-pointer opacity-0 transition-transform transition-opacity duration-300 ease duration-500 ease">
                                <i class="bi bi-play-fill mt-1 ml-1"></i>
                              
                            </span> */}

              <img
                src="/monkey.png "
                alt="How to plan your retirement with crypto?"
                className="absolute bottom-[-60px] left-0 z-[1] w-full h-[100px] filter blur-[15px] object-bottom transform scale-[3]"
              />
              <img
                src="/monkey.png"
                alt="How to plan your retirement with crypto?"
                class="w-full h-full object-cover"
              />
              <div className="text-[#fff9] text-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-[24px] font-normal leading-[30px] tracking-[.117px] absolute bottom-[12px] left-[15px] mix-blend-plus-lighter overflow-hidden text-ellipsis line-clamp-3 z-[2]">
                How to plan your retirement with crypto?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCard;
