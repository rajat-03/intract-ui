import Image from "next/image";
import React from "react";
import { PiVideoFill } from "react-icons/pi";
import { cardData } from "@/constants/CardData";

const MultiCard = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto max-w-[1200px] px-[10px] py-8 text-white opacity-100">

        <section className="flex flex-col items-center justify-center gap-2 font-normal tracking-[0.117px]">
          <div className="text-[24px] leading-8">
            Top Crypto Creators and Projects to Follow
          </div>
          <div className="text-center text-[16px] leading-5 text-[#7d7d7d]">
            Answers to your crypto doubts, straight from the experts
          </div>
        </section>

        {/* card group */}
        <section className="mb-5 mt-10 flex flex-wrap justify-center gap-4">
          {cardData.map((card, index) => (
            <div key={index} className="videoCardContainer">
              <div className="block h-full w-full">
                <div className="videoIcon">
                  <PiVideoFill className="text-xl opacity-80" />
                </div>

                <Image
                  src="/cat.png"
                  alt="How to plan your retirement with crypto?"
                  width={281}
                  height={100}
                  className="videoCardImage"
                />
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={281}
                  height={418}
                  className="h-full w-full object-cover"
                />

                <div className="videoCardTitle">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MultiCard;
