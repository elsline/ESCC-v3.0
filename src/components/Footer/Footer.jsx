/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/footer.css";
import LogoF from "./LogoF";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-14">
      <div className="container">
        <div className=" flex flex-col gap-4 lg:grid grid-cols-3 items-center">
          <div className=" ">
            <LogoF />
          </div>
          <div className=" pb-6">
            <ul className=" flex justify-center gap-8 lg:text-[18px] text-[16px] leading-8    uppercase font-normal text-white">
              <li className=" ">
                <NavLink to={"/about"} className=" opacity-70">
                  About
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/services"} className=" opacity-70">
                  Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"/projects"} className=" opacity-70">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="   ">
            <div className="footer-icons text-white flex gap-4  justify-end items-center ">
              <span className=" hidden lg:flex">FOLLOW US:</span>
              <a className="facebook-icon " href="#">
                <i className="fa-brands fa-facebook-f cursor-pointer text-[white] text-[22px] flex justify-center items-center w-[42px] h-[42px] border-[1px] border-[solid] border-[white]  opacity-70  hover:opacity-100 tr-4   rounded-full"></i>
              </a>
              <a href="" className="insta-icon">
                <i className="fa-brands fa-instagram cursor-pointer text-[white] text-[22px] flex justify-center items-center w-[42px] h-[42px] border-[1px] border-[solid] border-[white] opacity-70   hover:opacity-100  tr-4 rounded-full"></i>
              </a>
              <a href="" className="x-icon">
                <i className="fa-brands fa-x-twitter cursor-pointer text-[white] text-[22px] flex justify-center items-center w-[42px] h-[42px] border-[1px] border-[solid] border-[white] opacity-70   hover:opacity-100  tr-4 rounded-full"></i>
              </a>
              <a href="" className="snapchat-icon">
                <i className="fa-brands fa-snapchat cursor-pointer text-[white] text-[22px] flex justify-center items-center w-[42px] h-[42px] border-[1px] border-[solid] border-[white] opacity-70  hover:opacity-100  tr-4 rounded-full"></i>
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
      <hr className="mt-14 opacity-10 " />
      <p className=" flex justify-center items-center text-[14px] not-italic font-light leading-[24px] tracking-[-0.3px] text-[white] text-center pt-[40px]">
        © 2024 ESSC Group. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
