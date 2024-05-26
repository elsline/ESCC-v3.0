/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/sections.css";
import { NavLink, Link } from "react-router-dom";

function ProjectLand(props) {
  return (
    <div className="landing h-fit lg:h-fit lg:pt-[200px]  pt-[100px]  relative z-30 ">
      <div className="landing-text text-white flex justify-center items-center gap-5 h-full flex-col">
        <span className="flex">
          <NavLink
            to="/"
            className="text-[13px] not-italic font-medium leading-[30px] uppercase"
          >
            Home
          </NavLink>
          <span className="px-2">/</span>
          <Link
            to={props.to}
            className="text-[13px] not-italic font-medium leading-[30px] uppercase"
          >
            {props.page}
          </Link>
          <span className="px-2">/</span>
          <NavLink
            to={props.projectName}
            className="text-[13px] opacity-100 not-italic font-medium leading-[30px] uppercase max-w-[120px] inline-block overflow-hidden whitespace-nowrap overflow-ellipsis "
          >
            {props.projectPage}
          </NavLink>
        </span>
        <h2 className="text-[white] text-center text-[36px] lg:text-[68px] not-italic font-medium leading-[normal] uppercase">
          {props.name}
        </h2>
      </div>
    </div>
  );
}

export default ProjectLand;
