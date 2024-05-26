/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import "../Header/styles/header.css";
import MainBtn from "../Buttons/MainBtn";
import MegaMenu from "../MegaMenu/MegaMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSRulePlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CSSRulePlugin);

function Header(props) {
  useGSAP(() => {
    const headerTl = gsap.timeline();
    headerTl.from("header", {});
  }, {});

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` z-[100] text-white w-full lg:h-[80px] h-[50px]  lg:translate-y-[20px]
      fixed ${props.className} ${isScrolled ? "scrolled" : ""} `}
    >
      <div className="container  flex items-center justify-between  h-full">
        <Logo />
        <Nav />
        <MainBtn
          to={"/contact"}
          name="Contact Us"
          className="lg:flex  hidden contact-btn"
        />
      </div>
    </header>
  );
}

export default Header;
