/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/buttons.css";
import { Link } from "react-router-dom";

export const Arrow = (props) => {
  return (
    <svg
      className="arrow-icon"
      width="15"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 138">
        <path
          id="Vector"
          d="M3.6 0.5V2.4H14.931L0 18.1605L1.269 19.5L16.2 3.7395V15.7H18V0.5H3.6Z"
          fill="#9197a3"
        ></path>
      </g>
    </svg>
  );
};
function SecBtn(props) {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      className={` secBtn uppercase  tr-4 flex items-center gap-2 text-[#9197a3]  lg:text-[16px] text-[12px]   font-medium hover:text-[#2a354c]   cursor-pointer`}
    >
      {props.name}
      <Arrow />
    </Link>
  );
}

export default SecBtn;
