/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Landing from "../sections/Landing";
import WhoWeAre from "../sections/WhoWeAre";
import OurMission from "../sections/OurMission";
import ESSCBenefits from "../sections/ESSCBenefits";
import HowWeWork from "../sections/HowWeWork";
import GetStarted from "../components/GetStarted/GetStarted";
import ScrollEffect from "../components/Buttons/ScrollEffect";
import ScrollDownUp from "../components/Buttons/ScrollDownUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const sectionRefs = {
    whoWeAre: useRef(null),
    ourMission: useRef(null),
    esscBenefits: useRef(null),
    howWeWork: useRef(null),
  };
  const handleScroll = () => {
    const top = window.scrollY;
    const scrollEfs = document.querySelectorAll(".scrollEffect .ef");

    Object.keys(sectionRefs).forEach((key) => {
      const section = sectionRefs[key].current;
      if (section) {
        const offset = section.offsetTop - 300;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          scrollEfs.forEach((link) => {
            link.classList.remove("active");
            const activeLink = document.querySelector(
              `.scrollEffect .ef[href*=${id}]`
            );
            if (activeLink) {
              activeLink.classList.add("active");
            }
          });
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".ScrollDownUp .down", {
      scrollTrigger: {
        trigger: "#HowWeWork",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
      },
      opacity: 0,
      display: "none",
    });
    tl.to(".ScrollDownUp .up", {
      scrollTrigger: {
        trigger: "#getStarted",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: true,
      },
      opacity: 1,
      display: "block",
    });
  }, {});

  return (
    <>
      <div className="about" key={1}>
        <Landing name="About us" page="about" />

        <ScrollEffect />
        <ScrollDownUp />
        <div id="WhoWeAre" ref={sectionRefs.whoWeAre}>
          <WhoWeAre />
        </div>
        <div id="ourMission" ref={sectionRefs.ourMission}>
          <OurMission />
        </div>
        <div id="ESSCBenefits" ref={sectionRefs.esscBenefits}>
          <ESSCBenefits />
        </div>
        <div id="HowWeWork" ref={sectionRefs.howWeWork}>
          <HowWeWork />
        </div>
        <GetStarted />
      </div>
    </>
  );
};

export default About;
