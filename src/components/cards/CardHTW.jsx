/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/cards.css";

function CardHTW(props) {
  return (
    <div
      className={`card ${props.className} flex flex-col bg-[white] p-[24px] w-[315px] h-[217px]`}
    >
      <h4 className="relative flex text-[#2a354c] text-center text-[24px] not-italic font-semibold leading-[normal] uppercase pb-[5px]">
        {props.number}
      </h4>
      <span className="pt-[5px] text-[#2a354c] text-[24px] not-italic font-semibold leading-[normal] uppercase max-w-[270px] pb-[8px]">
        {props.title}
      </span>
      <p className="text-[#7a818f] text-[14px] not-italic font-normal leading-[normal] max-w-[270px] text-left">
        {props.paragraph}
      </p>
    </div>
  );
}

export default CardHTW;
