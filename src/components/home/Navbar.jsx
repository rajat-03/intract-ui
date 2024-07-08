import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-center border-b border-[rgba(255,255,255,0.15)] bg-[#00000040] backdrop-blur-[5px]">
        <section className="mx-auto w-full max-w-[1200px] px-4">
          <div className="navbarContent flex items-center justify-between">
            {/* logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/intract_text.svg"
                className="h-5 flex-shrink-0"
                width={97}
                height={20}
                alt="intract Logo"
              />
            </Link>

            {/* links */}
            <nav className="navLinkDiv hidden md:flex">
              <ul className="navLinkContainer flex space-x-4">
                <li>
                  <Link href="#" className="navLink">
                    Compass
                  </Link>
                </li>
                <li>
                  <Link href="#" className="navLink">
                    Explore
                  </Link>
                </li>
                <li className="relative flex items-center text-[16px] font-normal tracking-[0.117px] text-[#ffffffb3] cursor-pointer transition duration-[50ms] ease-in-out justify-center px-[6px]">
                  <Link href="#" className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-white md:p-0">
                    Academy
                  </Link>
                  <div className="ml-2 inline-block items-center rounded-md bg-[rgb(100,53,233)] px-[0.65em] text-center text-[0.75em] font-normal text-white whitespace-nowrap align-baseline">New</div>
                  <div className="absolute bottom-[-10px] w-full h-[3px] rounded-[2rem] bg-white"></div>
                </li>
                <li>
                  <Link href="#" className="navLink">
                    NFTs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="navLink">
                    For Projects
                  </Link>
                </li>
              </ul>
            </nav>

            {/* search and signin  */}
            <nav className="flex flex-grow flex-shrink-1 flex-basis-0 justify-end gap-4 ml-[2rem]">
              <div className="searchContainer relative flex items-center">
                <IoSearch className="absolute left-2 text-xl text-slate-700" />
                <input
                  type="text"
                  placeholder="Search for ecosystems, trending quests etc."
                  className="searchInput pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="mobileSearchIcon md:hidden">
                  <IoSearch className="text-xl text-white-80" />
                </div>

                <div className="flex items-center gap-2">
                  <section className="broadcastDiv bg-[rgba(60,32,140,0.2)] p-1 rounded-full">
                    <Image src="/broadcast.svg" width={16} height={16} alt="broadcast" />
                  </section>
                  <button
                    type="button"
                    className="px-[24px] py-[5px] text-[15px] font-medium text-black bg-white rounded-[4px] whitespace-nowrap"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </nav>

            {/* small device button */}
            <div className="flex items-center lg:hidden">
              <section className="ml-1">
                <FaBars className="text-2xl text-white" />
              </section>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
