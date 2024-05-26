/* eslint-disable no-unused-vars */
import React from "react";
import SecTitle from "../components/Titles/SecTitle";
import partnersData from "../json/partners.json";
import "../sections/styles/sections.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function PartnersSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".partners-section",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".partners-section .gsapText", {
      xPercent: "20",
      opacity: 0,
    }).from(".partners-section .scrollingImgs", {
      opacity: 0,
    });
  }, {});
  const partnerImg = partnersData.map((img) => (
    <div key={img.id} className="img lg:w-[200px]  w-[140px]">
      <LazyLoadImage
        effect="blur"
        loading="lazy"
        src={img.image}
        alt=""
        className="lg:h-[102px] h-[70px]"
      ></LazyLoadImage>
    </div>
  ));

  return (
    <section className="partners-section origin-right relative overflow-hidden bg-sec-blue  pt-8 pb-14 xlg:py-24">
      <div className="line-container container flex justify-between items-center w-full h-full top-0 left-[50%] translate-x-[-50%] absolute z-[0] ">
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
      </div>
      <div className="container  ">
        <div className="partners h-[180px] grid grid-cols-12 items-end">
          <SecTitle
            title="ESSC PARTNERS"
            className="text-white gsapText  hidden xlg:flex  col-start-[1]   text-[72px]  max-w-[400px]  leading-[90px] before:top-0  before:left-[5] pl-[0] before:h-[5px]"
          />
          <SecTitle
            title="ESSC PARTNERS"
            className="text-white xlg:hidden flex col-span-12 text-center mx-auto  text-[32px] lg:text-[72px]   leading-[90px] before:top-[15px]  before:left-[50%] before:translate-x-[-50%] pl-0 before:h-[5px] before:w-[60px]"
          />
          <div className="scrollingImgs col-span-12  xlg:col-start-6 lg:col-end-13 xlg:absolute relative">
            <div className="scrolling-items">
              <div className="scrolling-img">{partnerImg}</div>
              <div className="scrolling-img">{partnerImg}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
