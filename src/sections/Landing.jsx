/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/sections.css";
import { NavLink } from "react-router-dom";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Landing(props) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".landing-text", {
      opacity: 0,
      y: 40,
    });
  }, {});
  return (
    <div className="landing h-[380px] lg:h-[540px]  relative z-30 ">
      <div className="landing-text text-white flex justify-center items-center gap-5 h-full flex-col">
        <span className="fade-up">
          <NavLink
            to="/"
            className="text-[14px] not-italic font-medium leading-[30px] uppercase"
          >
            Home
          </NavLink>
          <span className="px-2">/</span>
          <NavLink
            to={props.to}
            className="text-[14px] not-italic font-medium leading-[30px] uppercase"
          >
            {props.page}
          </NavLink>
        </span>
        <h2 className="text-[white] text-center text-[46px] lg:text-[68px] not-italic font-medium leading-[normal] uppercase">
          {props.name}
        </h2>
      </div>
    </div>
  );
}

export default Landing;
