/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./styles/loading.css";
import LogoLoading from "./LogoLoading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Loading = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from([".text-1", ".text-2", ".text-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to([".text-1", ".text-2", ".text-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to(".intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(".welcomeText1", {
          opacity: 0,
          duration: 0.5,
        })
        .to(".welcomeText1", {
          opacity: 0,
          duration: 0.5,
        })
        // .from(".welcomeText2", {
        //   opacity: 0,
        //   duration: 0.5,
        // })
        // .to(".welcomeText2", {
        //   opacity: 0,
        //   duration: 0.5,
        // })
        // .from(".welcomeText3", {
        //   opacity: 0,
        //   duration: 0.5,
        // })
        .to(".loading-screen", {
          duration: 1,
          xPercent: "-100",
          ease: "slow(0.9,0.7,false)",
        })
        .to(".loading-screen", {
          display: "none",
          visibility: "hidden",
          zIndex: "-9999",
        });
    },
    { scope: container },
    []
  );
  return (
    <div className="loading-screen-container" ref={container}>
      <div className="loading-screen  fixed  z-[9999] ">
        <div className="h-screen  intro-slider w-screen flex   flex-col  gap-2 lg:gap-10 tracking-tight p-5 lg:p-10 bg-gray-50  absolute top-0   left-0 z-[10]">
          <h1 className=" text-[48px] text-sec-blue  lg:text-9xl font-semibold uppercase text-1">
            INNOVATIONS
          </h1>
          <h1 className="text-[48px] text-sec-blue   lg:text-9xl font-semibold uppercase text-2">
            QUALITY{" "}
          </h1>
          <h1 className="text-[48px] text-sec-blue   lg:text-9xl font-semibold uppercase text-3">
            Modern
          </h1>
        </div>
        <div className=" h-screen w-screen  flex  bg-sec-blue  justify-center items-center place-items-center">
          <div className=" flex flex-col items-center    ">
            <h1 className="welcomeText1 text-[48px]  lg:text-9xl font-semibold uppercase text-white ">
              Welcome.
            </h1>
            {/* <h1 className="welcomeText2 text-[48px]  lg:text-9xl font-semibold uppercase text-white  absolute ">
              to.
            </h1>
            <div className="welcomeText3 absolute translate-y-[24px]">
              <LogoLoading />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
