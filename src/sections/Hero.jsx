/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import SecTitle from "../components/Titles/SecTitle";
import MainBtn from "../components/Buttons/MainBtn";
import arrow from "../imgs/SVG/arrow.svg";
import MousePointer from "../components/Buttons/MousePointer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
        },
        scrollTrigger: {
          trigger: ".hero-page",
          start: "top 750px",
          end: "bottom 750px",
          markers: false,
          scrub: false,
        },
      });
      tl.from(".hero-page .container", {
        opacity: 0,
      });
    },
    { scope: container },
    []
  );
  return (
    <section
      className="hero-page  h-screen   bg-no-repeat bg-cover  bg-center  overflow-hidden"
      ref={container}
    >
      <div className="container h-full">
        <div className="flex flex-col justify-end h-full pb-14">
          <div className="heroSection mb-28">
            <SecTitle
              title="ESCC GROUP FOR CONSTRUCTION & CONSULTING"
              color="white"
            />
            <h1 className="text-[white] mb-8 mt-4 p-0 m-0  text-[35px] lg:text-[72px] md:text-[52px] max-w-[300px] leading-[normal] not-italic font-medium lg:leading-[80px] uppercase  lg:max-w-[900px]">
              THE NEW SCOPE REINVENTED FOR THE CONSTRUCTION INDUSTRY.
            </h1>
            <MainBtn
              to={"/about"}
              name="More about us"
              icon={<img src={arrow} className="w-5 h-5" alt="" />}
            />
          </div>
          <MousePointer />
        </div>
      </div>
    </section>
  );
}

export default Hero;
