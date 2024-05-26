/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ContactCard(props) {
  return (
    <div className="card flex flex-col items-start ">
      <span className="title flex gap-4  items-center  uppercase">
        {props.icon}
        <span className="text-[#1d263a] font-[Montserrat]  text-[20px] lg:text-[24px] not-italic font-medium leading-[normal] tracking-[-0.48px]">
          {props.name}
        </span>
      </span>
      <div className="info w-fit ml:6 lg:ml-11  mt-4">
        <span className="text-[#344054] block font-[Montserrat]  text-[17px] lg:text-[20px] not-italic font-normal leading-[normal] max-w-[380px] cursor-pointer">
          <a
            className="text-[#344054] font-[Montserrat] text-[17] lg:text-[20px] not-italic font-normal leading-[normal] max-w-[380px]"
            href="https://shorturl.at/Dw0iY"
            target="_blank"
          >
            {props.info}
          </a>
        </span>
      </div>
    </div>
  );
}

export default ContactCard;
