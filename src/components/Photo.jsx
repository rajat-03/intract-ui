"use client"
import React, { useState } from 'react'
import { IoBookOutline } from "react-icons/io5";
import Switcher from './Switcher';

const Photo = () => {


    return (

        <div className='mt-5'>
            <div className='max-w-[1200px] mx-auto container py-8 px-3 text-white opacity-100'>

                <div className="flex flex-col justify-center items-center  font-normal  tracking-[0.117px] gap-2">
                    <div class="text-[24px] leading-8">Crypto Dictionary</div>
                    <div class="text-center text-[16px] leading-5 text-[#7d7d7d]">Your one-stop to catch up on all crypto terms</div>
                </div>

                <div className="sm:w-full sm:h-full mt-[30px] relative cursor-pointer overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.2)] w-[90vw] h-[244px] mx-auto my-20 ">
                    <img src="/image2.svg" alt="University of Southern California" className="h-full w-full object-cover filter blur-lg sm:filter-none sm:blur-0" />
                    <img src="/image2.svg" alt="University of Southern California" className="absolute bottom-[-100px] left-0 h-[100px] w-full filter blur-[15px] object-cover object-bottom z-[2] scale-[3]" />

                    <div className="w-full max-w-[1200px] h-[20%] absolute left-[1px] rounded-bl-[16px] rounded-br-[16px] flex justify-between items-center lg:p-[24px] p-4 bottom-4 lg:bottom-0 z-[3]">
                        <div className="font-normal tracking-[.117px]">
                            <div className="text-[#fff9] text-[24px] leading-7 ">Web3 + Degen Glossary</div>
                            <div className="text-white text-opacity-40 font-normal  text-base">Your own crypto dictionary</div>
                        </div>

                        <div className="flex items-center justify-center w-16 h-16 p-5 rounded-full border-2 border-white border-opacity-20 backdrop-blur-md bg-black bg-opacity-40 text-xl">
                            <IoBookOutline />
                        </div>
                    </div>
                </div>

                <Switcher />


            </div>


        </div>

    )
}

export default Photo