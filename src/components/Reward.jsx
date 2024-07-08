/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from "react";
import { FaDiscord, FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

const Reward = () => {
    const targetTime = new Date().getTime() + 42 * 60 * 1000; // 30 minutes from now

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        let timeLeft = {};

        if (difference > 0) {
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            timeLeft = {
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds,
            };
        } else {
            timeLeft = { minutes: "00", seconds: "00" };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    },[]);

    return (
        <>
            <div className="flex justify-center gap-[24px] mt-20 mb-12 mx-auto relative">
                {/* timer and reward container */}
                <div className="w-[320px]">
                    {/* timer container */}
                    <div className="relative p-3 rounded-[12px] border border-white-05 bg-white-05 backdrop-blur-[30px] flex flex-col gap-4">
                        <div className="relative flex items-center gap-2 text-white-40 text-base font-normal leading-5">
                            <div className="flex items-center justify-center w-5 h-5 p-1 rounded-full bg-[rgba(250,137,34,.1)]">
                                <BsClockHistory className="text-[12px] text-[#fa8922]" />
                            </div>
                            Reward unlocks in
                        </div>

                        <hr className="border-dashed border border-[#ffffff26] rounded-full" />
                        <div className="timerContainer">
                            <Image
                                src="/dotBg.png"
                                alt="dot background"
                                width={292}
                                height={84}
                                className="w-full h-full object-cover absolute top-0 left-0"
                            />

                            <div className="timerBox">
                                <p className="timerNumber">02</p>
                                <p className="timerInterval">Days</p>
                            </div>

                            <div className="timerBox">
                                <p className="timerNumber">16</p>
                                <p className="timerInterval">Hrs</p>
                            </div>

                            <div className="timerBox">
                                <p className="timerNumber">{timeLeft.minutes}</p>
                                <p className="timerInterval">Mins</p>
                            </div>

                            <div className="timerBox">
                                <p className="timerNumber">{timeLeft.seconds}</p>
                                <p className="timerInterval">Sec</p>
                            </div>
                        </div>
                    </div>
                    {/* reward container */}
                    <div className="w-[320px] rounded-[12px] border border-white-10 mt-4 bg-white-05 p-3 relative">
                        <Image
                            src="/rewardImage.gif"
                            alt="reward gif"
                            width={292}
                            height={294}
                            className="w-[296px] h-[296px] rounded-[6px] border border-white-10 bg-[rgba(0,0,0,0.2)] mb-3"
                            unoptimized={true}
                        />

                        <div className="luckyDrawDiv bg-[#0009]">
                            Lucky Draw
                        </div>
                        <div className="flex flex-row items-center justify-between text-white-40 text-base font-normal leading-5 mb-3">
                            <div>Exclusive Community</div>
                            <span className="flex gap-1 items-center">
                                {" "}
                                <FaDiscord className="text-[#09a5be] opacity-100" />
                                <p className="flex items-center gap-4 text-[#fff] text-base font-normal leading-5">
                                    Earndrop
                                </p>
                            </span>
                        </div>

                        <hr className="border-dashed border border-[#ffffff26] rounded-full opacity-100" />

                        <div className="rewardStepTitle">
                            <div>Complete all Essential quests</div>
                            <div className="rewardCheck">
                                <FaCheck />
                            </div>
                        </div>

                        <div className="rewardStepTitle">
                            <div>Complete at least 1 Alpha Hub quest today</div>
                            <div className="rewardCheck">
                                <FaCheck />
                            </div>
                        </div>
                        <div className="rewardClaimBtn">
                            <div>Claim Now</div>
                            <FaArrowRightLong />
                        </div>

                        <Image
                            src="/reward-info-path.svg"
                            alt="reward-path"
                            width={223}
                            height={86}
                            className="rewardPath" />

                        {/* Reward info */}
                        <div className="rewardDetailContainer shadow-[0_2px_5px_#00000080]">
                            <div className="rewardDetailsHeader">
                                Reward info
                                <BsInfoCircle className="ml-1 font-normal" />
                            </div>
                            <div className="rewardDetailsBody">
                                <p className="rewardDetailPara">
                                    <span className="text-[#fffc]">
                                        Free access to paid KOL (crypto earning) communities!
                                    </span>
                                </p>
                                <br />
                                <p className="rewardDetailPara">
                                    Win access to exclusive earning communities of some of the
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

export default Reward;