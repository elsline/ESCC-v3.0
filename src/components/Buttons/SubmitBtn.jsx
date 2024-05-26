/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/buttons.css";
import { Link } from "react-router-dom";

export const Arrow = (props) => {
  return (
    <svg
      className="arrow-icon"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 138">
        <path
          id="Vector"
          d="M3.6 0.5V2.4H14.931L0 18.1605L1.269 19.5L16.2 3.7395V15.7H18V0.5H3.6Z"
          fill={props.color}
        ></path>
      </g>
    </svg>
  );
};
function SubmitBtn(props) {
  return (
    <button
      onClick={props.event}
      to={props.to}
      type={props.type}
      className={` mainBtn navLink tr-4 flex items-center gap-3  ${props.className}`}
    >
      {props.name}
      {props.icon}
    </button>
  );
}

export default SubmitBtn;
