/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles/megaMenu.css";
import MegaIcon from "./MegaIcon";
import { Link, NavLink } from "react-router-dom";

function MegaMenu() {
  const [isClosed, setIsClosed] = useState("right-[-405px] opacity-0");

  const handleCallClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailClick = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <>
      <MegaIcon open={() => setIsClosed("right-[0] opacity-100")} />
      <div
        className={`mega-menu lg:hidden block  z-50 fixed  ${isClosed}   top-[0] bottom-[0] bg-[white] p-[20px] h-screen w-full max-w-[25rem] [transition:0.5s]`}
      >
        <div
          className="close-icon absolute cursor-pointer top-[20px] right-[20px]"
          onClick={() => setIsClosed("right-[-405px]")}
        >
          <i className="fa-solid fa-xmark  text-3xl text-black"></i>
        </div>
        <ul className="links  flex  flex-col">
          <NavLink to={"/"} className="megaLink ">
            <span>Home</span>
          </NavLink>
          <NavLink to={"/about"} className="megaLink">
            <span>About</span>
          </NavLink>
          <NavLink to={"/services"} className="megaLink">
            <span>Services</span>
          </NavLink>
          <NavLink to={"/projects"} className="megaLink">
            <span>Projects</span>
          </NavLink>
          <NavLink to={"/certificates"} className="megaLink">
            <span>Certificates</span>
          </NavLink>
          <NavLink to={"/contact"} className="megaLink">
            <span>Contact Us </span>
          </NavLink>
        </ul>
        <div className="contact-mobile">
          <a className="call-me" onClick={() => handleCallClick(+201001303001)}>
            <i className="fa-solid fa-phone"></i>
          </a>
          <a
            className="mail-me"
            onClick={() => handleEmailClick("Hesham.mamesh@esccgroup.com")}
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <Link to="/contact" className="start-project">
          start a project
        </Link>
      </div>
    </>
  );
}

export default MegaMenu;
