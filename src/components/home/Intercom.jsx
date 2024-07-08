import React from 'react'
import { RiMessageFill } from "react-icons/ri";

const Intercom = () => {
  return (
    <>
      <div className="relative">
        <button className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 right-5 rounded-lg  mb-5">
          <div className="p-2 rounded-full border-4 text-black border-white bg-white">
            <RiMessageFill className='text-2xl' />
          </div>
        </button>
      </div>
    </>

  )
}

export default Intercom