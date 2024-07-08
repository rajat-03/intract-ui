"use client"
import { useEffect, useState } from "react";

const SectionPath3 = () => {

  const [isLargerScreen, setIsLargerScreen] = useState(false)

  useEffect(() => {
    const isScreenLarge = window.innerWidth >= 1024;
    setIsLargerScreen(isScreenLarge)

  }, [])

  return (
    <>
      {isLargerScreen ? (
        <div className="absolute top-[-46%] left-[57%] -z-10 ">
          <svg
            width="778"
            height="329"
            viewBox="0 0 778 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1016_21647)">
              <path
                d="M386.615 8C455.063 12.0917 620.356 28.8358 544.235 94.4422C457.798 168.94 638.298 187.8 747.615 190"
                stroke="white"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-dasharray="8 8"
              ></path>
              <path
                d="M747.5 190C726.099 225.723 543.202 363.742 389 278.5C149.5 146.106 1.23354 246.726 15.3849 305.717"
                stroke="white"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-dasharray="8 8"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1016_21647">
                <rect width="778" height="329" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      ) : (
        <div className="absolute top-[-2%] left-[35%] -z-10">
          <svg width="316" height="234" viewBox="0 0 316 234" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.1924 16.496C58.1922 134.494 163.192 6.49575 163.192 63.4974C163.193 141.119 224.833 107.228 302.5 77" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-dasharray="8 8"></path>
            <path d="M53.6919 214.997C53.6917 159.497 79.832 153.384 153.192 146.997C255.532 138.086 290.362 108.607 302.291 76.9998" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-dasharray="8 8"></path>
          </svg>
        </div>)}
    </>

  );
};

export default SectionPath3;
