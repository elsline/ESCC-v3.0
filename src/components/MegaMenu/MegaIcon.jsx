/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import MegaMenu from "./MegaMenu";

function MegaIcon(props) {
  return (
    <>
      <div
        onClick={props.open}
        className="megaIcon w-8 flex lg:hidden flex-wrap justify-end  cursor-pointer"
      >
        <span
          className="mega-icon w-full [transition:0.4s] bg-[#ffffff] mb-[5px] h-[3px]"
          id="mega-icon"
        ></span>
        <span
          className="mega-icon w-full [transition:0.4s] bg-[#ffffff] mb-[5px] h-[3px]"
          id="mega-icon"
        ></span>
      </div>
    </>
  );
}

export default MegaIcon;
