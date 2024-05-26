/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../sections/Landing";
import certificatesData from "../json/certificates.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSRulePlugin, ScrollTrigger } from "gsap/all";
import GetStarted from "../components/GetStarted/GetStarted";
gsap.registerPlugin(useGSAP, ScrollTrigger, CSSRulePlugin);

function Certificates() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        stagger: { amount: 0.6, from: "left" },
      },
      scrollTrigger: {
        trigger: ".certificates .container",
        start: "200px center",
        end: "bottom center",
        scrub: false,
        markers: false,
      },
    });
    tl.from(".img-div", {
      
      y: 200,
    })
      .to(".img-div-after", {
        opacity: 1,
        height: 0,
      })
      .to(".img-div-after", {
        opacity: 1,
        height: "100%",
      })
      .to(".img-div-before", {
        opacity: 0,
        display: "none",
      })
      .to(
        ".img-div-after",
        {
          opacity: 1,
          height: 0,
          display: "none",
        },
        "<"
      )
      .to(".img-div", {
        borderColor: "black",
      });
  }, {});
  const certificates = certificatesData.map((certificate) => (
    <div
      key={certificate.id}
      className="img-div relative cursor-pointer   w-[350px] h-[480px]  border-solid border-[1px]"
    >
      <div className="img-div-after absolute z-10 bg-sec-blue w-full h-full left-0 top-0"></div>
      <div className="img-div-before absolute  bg-white w-full h-full left-0 top-0"></div>

      <img className="h-full w-full" src={certificate.image} alt="" />
    </div>
  ));

  return (
    <div className="certificates ">
      <Landing name="our certificates" page="certificates" to="/certificates" />
      <div className="container">
        <div className=" flex  flex-wrap justify-center gap-6  items-center lg:pt-28 pt-14 ">
          {certificates}
        </div>
      </div>
      <GetStarted />
    </div>
  );
}

export default Certificates;
