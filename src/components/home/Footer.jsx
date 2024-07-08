import Link from "next/link";
import { FaTwitter, FaDiscord, FaTelegram, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr className="rounded-full border border-white border-opacity-25 opacity-100" />
      <footer className="bg-black opacity-100">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between md:pr-[120px]">
            <div className="mb-6 md:mb-0">
              <Link
                href="https://www.intract.io/academy?tab=essentials"
                className="flex flex-col items-start max-w-80 gap-4"
              >
                <h3 className="text-[1.75rem] font-semibold whitespace-nowrap text-white">
                  intract.
                </h3>
                <p className="text-[#7d7d7d] font-normal text-[15px] leading-snug">
                  We are your personal guide for exploring web3 projects &amp;
                  earning 100x rewards
                </p>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-2 text-[15px] leading-snug font-semibold uppercase text-white">
                  Intract
                </h2>
                <div className="text-[#7d7d7d] font-normal text-[15px] leading-snug flex flex-col gap-2 justify-start items-start">
                  <Link href="#" className="hover:underline">
                    Explore Quests
                  </Link>
                  <Link href="#" className="hover:underline">
                    Communities
                  </Link>
                  <Link href="#" className="hover:underline">
                    Alpha Hub
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="mb-2 text-[15px] leading-snug font-semibold uppercase text-white">
                  Earn
                </h2>
                <div className="text-[#7d7d7d] font-normal text-[15px] leading-snug flex flex-col gap-2 justify-start items-start">
                  <Link href="#" className="hover:underline">
                    Refer & Earn
                  </Link>
                  <Link href="#" className="hover:underline">
                    Leaderboard
                  </Link>
                  <Link href="#" className="hover:underline">
                    Achievements
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="mb-2 text-[15px] leading-snug font-semibold uppercase text-white">
                  About
                </h2>
                <div className="text-[#7d7d7d] font-normal text-[15px] leading-snug flex flex-col gap-2 justify-start items-start">
                  <Link href="#" className="hover:underline">
                    Product Roadmap
                  </Link>
                  <Link href="#" className="hover:underline">
                    Affiliate Program
                  </Link>
                  <Link href="#" className="hover:underline">
                    Sign up Program
                  </Link>
                  <Link href="#" className="hover:underline">
                    Growth Community
                  </Link>
                  <Link href="#" className="hover:underline">
                    Blogs
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="mb-2 text-[15px] leading-snug font-semibold uppercase text-white">
                  Support
                </h2>
                <div className="text-[#7d7d7d] font-normal text-[15px] leading-snug flex flex-col gap-2 justify-start items-start">
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                  <Link href="#" className="hover:underline">
                    Create your quest
                  </Link>
                  <Link href="#" className="hover:underline">
                    Terms of Service
                  </Link>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:underline">
                    Community Guidelines
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-[#2b2b2b] sm:mx-auto lg:my-10" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="max-w-[1200px] text-[#7d7d7d] font-normal text-[15px] leading-snug">
              <span className="text-white opacity-75">Disclaimer: </span>
              Crypto Products, Virtual Digital Assets, and NFTs are unregulated
              and can be highly risky. There may be no regulatory recourse for
              any loss from such transactions. We advise the viewer to proceed
              with caution. Nothing in this website or any communication
              published by us amounts to, is intended to be, or should be
              construed as investment or purchase advice of any kind or
              financial advice or promotion under any applicable laws. Any
              decision made based on the content provided on this website or any
              communication published by us shall not be attributable to us.
            </p>
          </div>

          <hr className="my-6 border-[#2b2b2b] sm:mx-auto lg:my-10" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-[15px] text-white uppercase sm:text-center">
              Created By{" "}
              <Link
                href="https://www.intract.io/academy?tab=essentials"
                className="underline uppercase"
              >
                Intract
              </Link>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <div className="socialLink">
                <FaTwitter className="text-[rgba(55,125,255,1)]" />
              </div>

              <div className="socialLink">
                <FaDiscord className="text-[#09a5be] opacity-100" />
              </div>

              <div className="socialLink">
                <FaTelegram className="text-[#377dff] opacity-100" />
              </div>

              <div className="socialLink">
                <FaSpotify className="text-[#01ff01]  opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
