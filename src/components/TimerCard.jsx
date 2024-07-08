import React from "react";
import { FaDiscord, FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";

const TimerCard = () => {
    return (
        <>
            <div className="flex justify-center gap-[24px] mt-20 mb-12 mx-auto relative">
                {/* timer and reward container */}
                <div className="w-[320px]">
                    {/* timer container */}
                    <div className="relative p-3 rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[30px] flex flex-col gap-4">
                        <div className="relative flex items-center gap-2 text-[rgba(255,255,255,0.4)]  font-Outfit text-base font-normal leading-5">
                            <div className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-[rgba(250,137,34,.1)]">
                                <BsClockHistory className="text-[12px] text-[#fa8922]" />
                            </div>
                            Reward unlocks in
                        </div>

                        <hr className="border-dashed border border-[#ffffff26] rounded-full  " />
                        <div className="p-3 flex items-center justify-between gap-5 overflow-hidden relative rounded-lg border border-white border-opacity-10 bg-black bg-opacity-20 shadow-inner">
                            <img
                                src="/dotBg.png"
                                alt="dot background"
                                className="w-full h-full object-cover absolute top-0 left-0"
                            />

                            <div className="flex flex-col items-center z-10 relative max-w-10 min-w-10">
                                <h3 className="timerNumber"> 00</h3>
                                <p className="timerInterval"> Days</p>
                            </div>

                            <div className="flex flex-col items-center z-10 relative max-w-10 min-w-10">
                                <h3 className="timerNumber">13</h3>
                                <p className="timerInterval">Hrs</p>
                            </div>

                            <div className="flex flex-col items-center z-10 relative max-w-10 min-w-10">
                                <h3 className="timerNumber">52</h3>
                                <p className="timerInterval">Mins</p>
                            </div>

                            <div className="flex flex-col items-center z-10 relative max-w-10 min-w-10">
                                <h3 className="timerNumber">37</h3>
                                <p className="timerInterval">Sec</p>
                            </div>
                        </div>
                    </div>
                    {/* reward container */}
                    <div className="w-[320px] rounded-[12px] border border-white-10 mt-4 bg-white-05 p-3 relative">
                        <img
                            src="/rewardImage.gif"
                            alt=""
                            className="w-[296px] h-[296px] rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] mb-3"
                        />

                        <div className="text-white-80 text-shadow  text-base font-normal leading-5 absolute top-6 right-6 px-1 py-0.5 rounded-[4px] bg-[#0009]">
                            Lucky Draw
                        </div>
                        <div className="flex flex-row items-center justify-between text-[rgba(255,255,255,0.4)] text-base font-normal leading-5 mb-3">
                            <div>Exclusive Community</div>
                            <span className="flex gap-1 items-center">
                                {" "}
                                <FaDiscord className="text-[#09a5be] opacity-100" />
                                <p className="flex items-center gap-4 text-[#fff] text-base font-normal leading-5">
                                    Earndrop
                                </p>
                            </span>
                        </div>

                        <hr className="border-dashed border border-[#ffffff26] rounded-full  opacity-100" />

                        <div className="text-[rgba(255,255,255,0.4)] text-sm font-normal leading-4 flex items-center justify-between mt-3">
                            <div>Complete all Essential quests</div>
                            <div className="flex w-4 h-4 p-1 justify-center items-center flex-shrink-0 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] self-end text-sm">
                                <FaCheck />
                            </div>
                        </div>

                        <div className="text-[rgba(255,255,255,0.4)] text-sm font-normal leading-4 flex items-center justify-between mt-3">
                            <div>Complete at least 1 Alpha Hub quest today</div>
                            <div className="flex w-4 h-4 p-1 justify-center items-center flex-shrink-0 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] self-end text-sm">
                                <FaCheck />
                            </div>
                        </div>
                        <div className="flex w-full py-[10px] justify-center items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.6)] text-center text-base font-normal leading-5 mt-3">
                            <div>Claim Now</div>
                            <FaArrowRightLong />
                        </div>

                        <img src="/reward-info-path.svg" alt="reward-path" className="rewardPath"/>

                        {/* Reward info */}
                        <div className="rewardDetailContainer shadow-[0_2px_5px_#00000080] ">
                            <div className="rewardDetailsHeader">

                                Reward info
                                <BsInfoCircle className="ml-1 font-normal"/>
                            </div>
                            <div className="rewardDetailsBody">

                                <p className="rewardDetailPara">
                                    <span className="text-[#fffc]">
                                        Free access to paid KOL (crypto earning) communities!
                                    </span>
                                </p>
                                <br />
                                <p className="rewardDetailPara">
                                    Win access to exclusive earning communities of some of the the
                                    greatest earners in crypto for a month, every 24 hours. Get
                                    access to unmatched insights, a close-knit community of the best
                                    airdrop earners, and more.
                                </p>
                                <br />
                                <p className="rewardDetailPara">
                                    To win: make sure you&apos;ve connected your Twitter and Discord
                                    accounts - and follow our criteria!
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default TimerCard;
