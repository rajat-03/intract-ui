import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import ScrollDiv from "./ScrollDiv";
import SectionPath2 from "./sectionPath/SectionPath2";
import SectionPath1 from "./sectionPath/SectionPath1";
import Image from "next/image";
import { questDataFirst } from "@/constants/firstQuest";

const SectionFirst = () => {
  return (
    <div className="container mx-auto flex max-w-[100vw] flex-col px-0 py-8 opacity-100">
      <section className="relative mx-auto w-[90%] max-w-[1200px] px-4 text-white md:w-full">
        <div className="relative z-10">
          <div className="bg-white-05 md:w-[520px] rounded-t-3xl backdrop-blur-[20px] backdrop-filter">
            <div className="narrativeBodyImageDiv">
              {/* Image */}
              <div className="narrativeBodyMainImage">
                <Image
                  src="/guestImage.png"
                  alt="guestImage"
                  width={142}
                  height={162}
                  className="h-full w-full rounded-[16px] object-cover"
                />
                <div className="narrativeGuests">6 guests</div>
              </div>

              {/* Right side data */}
              <div className="flex flex-col">
                <div className="narrativeHeadTitle">Basics of Crypto</div>
                <div className="narrativeHeadSubtitle">
                  The safest and easiest place to start your crypto journey!
                </div>

                <hr className="border border-[#ffffff26] border-dashed opacity-100 rounded-full" />
                <div className="mt-4">
                  <div className="coinImgDiv flex items-center">
                    <Image src="/xp-icon-aacd204a.svg" alt="coin" width={18} height={16} />
                    1490 XPs
                  </div>
                </div>
              </div>
            </div>

            {/* slider div */}
            <ScrollDiv questData={questDataFirst} />
          </div>
          <SectionPath1 />
          <SectionPath2 />
          {/* <SectionPath3 /> */}
        </div>

        {/* second part */}
        <div className="relative mt-[37rem] flex w-full justify-center lg:-mt-6 lg:justify-end">
          <div>
            <div className="rewardCheckIcon">
              <FaCheck />
            </div>
            <div className="relative z-10 w-[160px]">
              <div className="rewardImageDiv">
                <Image
                  src="/cat3.png"
                  width={147}
                  height={165}
                  alt="cat2Image"
                  className="z-[1] h-[165px] w-[147px] rounded-[20px] object-cover"
                />
              </div>
              <div className="lockIcon">
                <IoIosLock className="text-3xl opacity-40" />
              </div>
            </div>
            <div className="mt-[16px] mb-[8px] w-[160px] text-[20px] font-normal leading-[24px] text-white-60 lg:w-full">
              Intract Certified: Learner NFT
            </div>
            <div className="mb-[16px] text-[16px] font-normal leading-[20px] text-white-20">
              Your crypto black-belt
              <br />
              certificate
            </div>
            <button className="claimBtn">
              <div>Claim</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionFirst;
