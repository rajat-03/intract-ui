import { IoBookOutline } from "react-icons/io5";
import Switcher from './Switcher';
import Link from "next/link";
import Image from "next/image";

const AlphaHub = () => {
    return (
        <div className="mt-5">
            <div className="container mx-auto max-w-[1200px] py-8 px-3 text-white opacity-100">
                <div className="flex flex-col items-center justify-center gap-2 font-normal tracking-[0.117px]">
                    <div className="text-[24px] leading-8">Crypto Dictionary</div>
                    <div className="text-center text-[16px] leading-5 text-[#7d7d7d]">Your one-stop to catch up on all crypto terms</div>
                </div>

                <div className="relative mx-auto my-20 mt-[30px] h-[244px] w-[90vw] cursor-pointer overflow-hidden rounded-[16px] border border-white-20 sm:h-full sm:w-full">
                    <Link href="https://docs.intract.io/v/intract-academy">
                        <Image
                            src="/image2.svg"
                            alt="University of Southern California"
                            width={1178}
                            height={459}
                            className="h-full w-full object-cover filter blur-lg sm:blur-0 sm:filter-none"
                        />
                        <Image
                            src="/image2.svg"
                            alt="University of Southern California"
                            width={1178}
                            height={100}
                            className="absolute bottom-[-100px] left-0 z-[2] h-[100px] w-full scale-[3] object-cover object-bottom filter blur-[15px]"
                        />
                        <div className="absolute bottom-4 left-[1px] z-[3] flex h-[20%] w-full max-w-[1200px] items-center justify-between rounded-bl-[16px] rounded-br-[16px] p-4 lg:bottom-0 lg:p-[24px]">
                            <div className="font-normal tracking-[.117px]">
                                <div className="text-[24px] leading-7 text-[#fff9]">Web3 + Degen Glossary</div>
                                <div className="text-base font-normal text-white text-opacity-40">Your own crypto dictionary</div>
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white border-opacity-20 bg-black bg-opacity-40 p-5 text-xl backdrop-blur-md">
                                <IoBookOutline />
                            </div>
                        </div>
                    </Link>
                </div>

                <Switcher />
            </div>
        </div>
    );
}

export default AlphaHub;
