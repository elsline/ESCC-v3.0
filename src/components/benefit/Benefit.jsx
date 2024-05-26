/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Benefit(props) {
  return (
    <div
      className={`benefit flex flex-col justify-center items-center bg-[#f9f9fa] p-7 ${props.className}`}
    >
      <span className="icon bg-sec-blue flex w-[48px] h-[48px] justify-center items-center">
        {props.icon}
      </span>
      <h3 className="for-pc lg:block hidden text-sec-blue text-center relative text-[18px] not-italic font-medium leading-[normal] tracking-[2.7px] uppercase pt-[18px] pb-[8px] w-[326px] before:absolute before:content-[''] before:top-2/4 before:translate-y-1/2 before:bg-sec-blue before:-right-[80px] before:h-[3px] before:w-[61px] after:absolute after:content-[''] after:bg-sec-blue after:top-2/4 after:translate-y-1/2 after:-left-[80px] after:h-[3px] after:w-[61px]">
        {props.title}
      </h3>
      <h3 className="for-mob lg:hidden block max-w-[184px]  text-sec-blue text-center relative text-[17px] not-italic font-medium leading-[normal] tracking-[2.7px] uppercase pt-[18px] pb-[8px] w-[326px] before:absolute before:content-[''] before:top-2/4 before:translate-y-1/2 before:bg-sec-blue before:-right-[60px] before:h-[3px] before:w-[24px] after:absolute after:content-[''] after:bg-sec-blue after:top-2/4 after:translate-y-1/2 after:-left-[60px] after:h-[3px] after:w-[24px]">
        {props.title}
      </h3>
      <p className="text-[#7a818f] h-[54px] text-center font-[Montserrat] text-[14px] not-italic font-normal leading-[normal] max-w-[440px]">
        {props.paragraph}
      </p>
    </div>
  );
}

export default Benefit;
