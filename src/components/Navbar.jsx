import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="z-50 sticky top-0 w-full h-16 flex items-center justify-center backdrop-blur-[5px] bg-[#00000040] border-b border-[rgba(255,255,255,0.15)]">
        <section className="max-w-[1200px] w-full mx-auto px-4">

          <div className="navbarContent">

            {/* logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="/intract_text.svg"
                className="h-5 flex-shrink-0"
                alt="intract Logo"
              />
            </Link>

            {/* links */}
            <nav className="justify-between hidden w-full lg:flex md:w-auto relative ml-[40px] gap-2 items-center transition-opacity duration-1000 ease-in-out" id="navbar-search">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-outfit text-[16px] font-normal tracking-[0.117px] h-full items-center text-[#ffffffb3] cursor-pointer transition ease-in-out duration-[50ms] justify-center relative px-[6px]">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-[#ffffffb3] opacity-80 rounded md:hover:bg-transparent md:hover:text-white hover:opacity-90 md:p-0"
                    aria-current="page"
                  >
                    Compass
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-[#ffffffb3] opacity-80 rounded md:hover:bg-transparent md:hover:text-white hover:opacity-90 md:p-0"
                  >
                    Explore
                  </a>
                </li>

                <li className="font-outfit text-[16px] font-normal tracking-[0.117px] h-full flex items-center text-[#ffffffb3] cursor-pointer transition ease-in-out duration-[50ms] justify-center relative px-[6px]">
                  <a
                    href="#"
                    className="block py-2 px-3 text-white  rounded md:hover:bg-transparent md:hover:text-white  md:p-0"
                  >
                    Academy
                  </a>
                  <div className="bg-[rgb(100,53,233)] ml-2 inline-block px-[0.65em] text-[0.75em] font-normal text-white text-center whitespace-nowrap align-baseline rounded-md items-center">New</div>
                  <div className="block absolute bottom-[-10px] w-full h-[3px] rounded-[2rem] bg-white"></div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-[#ffffffb3] opacity-80 rounded md:hover:bg-transparent md:hover:text-white hover:opacity-90 md:p-0"
                  >
                    NFTs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-[#ffffffb3] opacity-80 rounded md:hover:bg-transparent md:hover:text-white hover:opacity-90 md:p-0"
                  >
                    For Projects
                  </a>
                </li>
              </ul>
            </nav>

            {/* search and signin  */}
            <nav className="flex justify-end gap-4 flex-shrink-1 flex-grow flex-basis-0 ml-[2rem]">

              <div className="searchContainer">
                <IoSearch className="text-xl text-slate-700" />
                <input
                  type="text"
                  placeholder="Search for ecosystems, trending quests etc,."
                  className="searchInput focus:outline-none"
                />
              </div>

              <div className="flex justify-end items-center gap-2">

                <div className="w-[42.5px] h-[42.5px] backdrop-blur-[12px] flex lg:hidden items-center justify-center rounded-full relative cursor-pointer border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.07)]">
                  <IoSearch className="text-xl text-white-80" />
                </div>

                <div className="flex justify-between items-center gap-2">
                <section className="w-[42.5px] h-[42.5px] backdrop-blur-[12px] bg-[rgba(60,32,140,0.2)] flex items-center justify-center border border-[#fa8922] rounded-full relative cursor-pointer">
                  <img src="/broadcast.svg" alt="" />
                </section>
                <button
                  type="button"
                  className="text-black whitespace-nowrap bg-white rounded-[4px] px-[24px] py-[5px] text-[15px] font-medium"
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
