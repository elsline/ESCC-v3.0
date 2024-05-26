/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./slideText.css";

function SlideText(props) {
  return (
    <div className="scrollingText lg:py-[56px] py-[32px]">
      <div className="scrolling_text">
        <div className="text SlideText    text-sec-blue px-[0] lg:text-[112px] text-[48px] font-medium uppercase  relative inline [transition:0.5s_ease]">
          <span> {props.text}</span>
          <span> {props.text}</span>
          <span> {props.text}</span>
          <span> {props.text}</span>
        </div>
        <div className="text SlideText    text-sec-blue px-[0]  lg:text-[112px] text-[48px] font-medium uppercase  relative inline [transition:0.5s_ease]">
          <span> {props.text}</span>
          <span> {props.text}</span>
          <span> {props.text}</span>
          <span> {props.text}</span>
        </div>
      </div>
    </div>
  );
}

export default SlideText;
