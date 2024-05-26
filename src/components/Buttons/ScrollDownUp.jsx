/* eslint-disable no-unused-vars */
import React from "react";

function ScrollDownUp() {
  return (
    <div className="container lg:block hidden">
      <div className="ScrollDownUp w-fit h-fit fixed z-[1000]   right-10 translate-y-[280px]    ">
        <a
          href="#getStarted"
          className="down  text-[#949aa6]  font-[Montserrat] text-[14px] not-italic  font-semibold leading-[30px] uppercase [writing-mode:vertical-rl]"
        >
          Scroll Down
          <i className="fa-solid fa-angles-down mt-2 text-[#949aa6] text-[18px]"></i>
        </a>
        <a
          href="#WhoWeAre"
          className="up hidden  text-[#949aa6]  font-[Montserrat] text-[14px] not-italic  font-semibold leading-[30px] uppercase [writing-mode:vertical-rl]"
        >
          <i className="fa-solid fa-angles-up text-[#949aa6] text-[18px]"></i>
          Scroll Up
        </a>
      </div>
    </div>
  );
}

export default ScrollDownUp;
