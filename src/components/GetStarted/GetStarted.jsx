/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/getStarted.css";
import MainBtn from "../Buttons/MainBtn";
import { Arrow } from "../Buttons/MainBtn";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function GetStarted() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".get-started",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".get-started", {
      opacity: 0,
    });
  }, {});
  return (
    <section className="get-started lg:py-28 py-12 bg-white " id="getStarted">
      <div className="container">
        <div className="get flex flex-col justify-center items-center gap-8">
          <h2 className="text-[black] tr-4 lg:text-[48px] text-[32px] text-center text-wrap not-italic font-semibold leading-[57.6px] tracking-[-1px] uppercase">
            GET STARTED WITH US TODAY,{" "}
            <span className="fast tr-4  text-main-blue">FAST.</span>
          </h2>
          <MainBtn
            to={"/contact"}
            name="Start Project with us"
            className="secBtn border-main-blue text-main-blue w-fit   text-[16px]  svg:w-1 lg:text-[18px] text-center "
            icon={<Arrow />}
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
