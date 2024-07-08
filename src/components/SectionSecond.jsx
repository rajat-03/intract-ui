import React from 'react';
import ScrollDiv from './ScrollDiv';
import { FaCheck } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import Image from 'next/image';
import { questDataSecond } from '@/constants/secondQuest';
import SectionPath3 from './sectionPath/SectionPath3';
import SectionPath4 from './sectionPath/SectionPath4';
import SectionPath5 from './sectionPath/SectionPath5';

const SectionSecond = () => {
  return (
    <section className="relative mx-auto w-[90%] max-w-[1200px] px-[1rem] lg:w-full">
      {/* essential section 3 start*/}
      <div className="flex pt-[190px] text-white lg:mt-[68px] lg:justify-end lg:pt-0">
        <div className="relative z-[10] lg:mr-[240px]">
          {/* narrative container */}
          <div className="bg-white-05 lg:w-[520px] rounded-t-[24px] backdrop-blur-[20px] backdrop-filter">
            <div className="narrativeBodyImageDiv">
              {/* Image */}
              <div className="narrativeBodyMainImage">
                <Image
                  src="/flower.png"
                  alt="flower"
                  width={142}
                  height={162}
                  className="h-full w-full rounded-[16px] object-cover"
                />
                <div className="narrativeGuests">6 guests</div>
              </div>

              {/* Right side data */}
              <div className="flex flex-col text-white">
                <div className="narrativeHeadTitle">Introduction to Airdrops</div>
                <div className="narrativeHeadSubtitle">
                  Your best bet to make it big in crypto!
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
            <ScrollDiv questData={questDataSecond} />
          </div>
        </div>

        <SectionPath3 />
      </div>
      {/* essential section 3 end*/}

      <SectionPath4 />
      {/* essential section 4 start*/}
      <div className="relative mt-[37rem] flex justify-center lg:mt-16 lg:justify-start">
        <div>
          <div className="rewardCheckIcon">
            <FaCheck />
          </div>
          <div className="relative z-10 w-[160px]">
            <div className="rewardImageDiv">
              <Image
                src="/cat2.png"
                width={147}
                height={165}
                alt="cat2Image"
                className="z-[1] h-[165px] w-[147px] rounded-[20px] object-cover"
              />
            </div>
            <div className="lockIcon">
              <IoIosLock className="text-3xl text-white opacity-40" />
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

        <SectionPath5 />
      </div>
      {/* essential section 4 end*/}
    </section>
  );
};

export default SectionSecond;
