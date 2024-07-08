import React from 'react'
import ScrollDiv from './ScrollDiv'
import { FaCheck } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import Image from 'next/image'
import { questDataSecond } from '@/constants/secondQuest'
import SectionPath3 from './sectionPath/SectionPath3'
import SectionPath4 from './sectionPath/SectionPath4'
import SectionPath5 from './sectionPath/SectionPath5'

const SectionThird = () => {
  return (


    <section className="mx-auto px-[1rem] w-[90%] lg:w-full relative max-w-[1200px]">

      {/* esscential section 3 start*/}
      <div className=" pt-[190px] lg:pt-0  lg:mt-[68px]  flex lg:justify-end ">
        <div className="relative lg:mr-[240px] z-[10]">

          {/* narrative container */}
          <div className="lg:w-[520px] bg-white-05 backdrop-filter backdrop-blur-[20px] rounded-t-[24px]">
            <div className="p-[24px] flex flex-col lg:flex-row items-center gap-[24px] cursor-pointer rounded-t-[24px] border border-[rgba(255,255,255,0.15)] border-b-0">
              {/* Image */}
              <div className="flex-none h-[180px] w-[160px] p-[8px] rounded-[16px] border border-white-20 bg-white-05 relative text-white">
                <Image
                  src="/flower.png"
                  alt="flower"
                  width={142}
                  height={162}
                  className="h-full w-full object-cover rounded-[16px]"
                />
                <div className="absolute left-[14%] bottom-[16px] transform [-translate-x-1/2] bg-black-40 shadow-[0 0 5px rgba(0, 0, 0, 0.1)] backdrop-blur-[10px] px-[24px] py-2 inline-block rounded-full border border-white-20">
                  6 guests
                </div>
              </div>

              {/* Right side data */}
              <div className="flex flex-col text-white">
                <div className="text-[24px] font-normal leading-[30px] mb-[8px]">Introduction to Airdrops</div>
                <div className="text-[16px] font-normal leading-[20px] mb-[16px] overflow-hidden overflow-ellipsis line-clamp-[2] text-white-40">
                  Your best bet to make it big in crypto!
                </div>

                <hr className="border-dashed border border-[#ffffff26] rounded-full  opacity-100" />
                <div className="mt-4">
                  <div className="px-3 py-2 w-max flex flex-row gap-2 h-[32px] items-center rounded-[1000px] border-[0.5px] border-white-05 bg-white-07 text-[14px] font-normal leading-[16px]">
                    <img src="/xp-icon-aacd204a.svg" alt="" width="18" height="16" />
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
      {/* esscential section 3 end*/}


      <SectionPath4 />
      {/* esscential section 4 start*/}
      <div className='flex justify-center lg:justify-start relative mt-[37rem] lg:mt-16'>

        <div>
          <div className="flex w-[48px] h-[48px] p-[12px] justify-center items-center rounded-full border border-white-20 bg-white-05 backdrop-blur-[10px] text-[#fff3] text-[28px] ml-[55px]">

            <FaCheck />
          </div>
          <div class="relative z-10 w-[160px]">
            <div className="w-[160px] h-[180px] rounded-[24px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] flex justify-center items-center mr-[120px] mt-[16px] overflow-hidden">
              <Image
                src="/cat2.png"
                width={147}
                height={165}
                alt="cat2Image"
                className="w-[147px] h-[165px] rounded-[20px] object-cover z-[1]" />
            </div>
            <div className="flex w-[48px] h-[48px] p-[12px] justify-center items-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[#131313] backdrop-blur-[10px] absolute bottom-0 right-0 translate-x-[34%] translate-y-[35%]">
              <IoIosLock className="text-3xl text-white opacity-40" />
            </div>
          </div>
          <div className="text-white-60  text-[20px] font-normal leading-[24px] mb-[8px] mt-[16px] w-[160px] lg:w-full">

            Intract Certified: Learner NFT
          </div>
          <div className="text-white-20 text-[16px] font-normal leading-[20px] mb-[16px]">

            Your crypto black-belt
            <br />
            certificate</div>
          <button className="flex w-[160px] p-[10px_0] justify-center items-center rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.4)] text-[16px] font-normal leading-[20px] cursor-not-allowed">
            <div>Claim</div>
          </button>
        </div>

        <SectionPath5 />
      </div>
      {/* esscential section 4 end*/}

    </section>

  )
}

export default SectionThird