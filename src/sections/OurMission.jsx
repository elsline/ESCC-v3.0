/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SecTitle2 from "../components/Titles/SecTitle2";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function OurMission() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourMission",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".ourMission .gsapText", {
      opacity: 0,
      y: 50,
    }).from(".ourMission .prog", {
      opacity: 0,
      stagger: { amount: 1 },
    });
  }, {});
  const numsRef = useRef([]);
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(
    (props) => {
      const nums = numsRef.current;
      const section = sectionRef.current;

      const handleScroll = () => {
        if (window.scrollY >= section.offsetTop) {
          if (!started) {
            nums.forEach((num) => startCount(num));
            setStarted(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [started]
  );

  const startCount = (el) => {
    const goal = el.dataset.goal;
    let currentCount = 0;
    const increment = () => {
      currentCount++;
      if (currentCount <= goal) {
        el.textContent = currentCount;
        if (goal !== "1996") {
          el.textContent = "+" + el.textContent;
        }
        setTimeout(increment, 3000 / goal);
      }
    };
    increment();
  };
  return (
    <section
      className="ourMission lg:py-28 py-14 bg-sec-blue relative"
      id="ourMission"
    >
      <div className="line-container container flex justify-between items-center w-full h-full top-0 left-[50%] translate-x-[-50%] absolute z-[0] ">
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
      </div>
      <div className="container">
        <SecTitle2 title="OUR MISSION" className="text-white gsapText" />
        <div className="flex  justify-center items-center">
          <p className=" text-white gsapText text-center font-[Montserrat] lg:text-[20px] text-[18px] not-italic font-normal leading-[24px] max-w-[335px]   lg:leading-[32px] lg:max-w-[1008px] flex justify-center">
            To perform for our customers the highest level of quality
            construction services at fair and market competitive prices. ESCC
            strives to be the contractor of choice by providing quality
            professional construction services in an environment of integrity
            and trust
          </p>
        </div>
        <div
          ref={sectionRef}
          className="progress-counter lg:pb-10 pb-6 lg:pt-10 pt-5 text-[white] grid grid-cols-[repeat(2,1fr)]  lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]   gap-x-8 lg:gap-y-20 gap-y-10  w-full relative bottom-[0]  "
        >
          <div className="prog ">
            <div className="num">1996</div>
            <span>Founded</span>
          </div>
          <div className="prog ">
            <div
              className="num"
              ref={(el) => (numsRef.current[0] = el)}
              data-goal="50"
            >
              0
            </div>
            <span>Employees</span>
          </div>
          <div className="prog ">
            <div
              className="num"
              ref={(el) => (numsRef.current[1] = el)}
              data-goal="54"
            >
              0
            </div>
            <span>Clients</span>
          </div>
          <div className="prog  ">
            <div
              className="num"
              ref={(el) => (numsRef.current[2] = el)}
              data-goal="92"
            >
              0
            </div>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
