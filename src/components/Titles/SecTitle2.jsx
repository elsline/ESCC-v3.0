/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SecTitle2(props) {
  return (
    <h3
      className={`secTitle2 text-[#2a354c] text-center  text-[32px] lg:text-[40px] not-italic font-medium leading-[normal] uppercase pb-[32px] ${props.className}`}
    >
      {props.title}
    </h3>
  );
}

export default SecTitle2;
