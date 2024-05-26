/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "../sections/styles/sections.css";
import servicesData from "../json/services.json";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function ServicesSection() {
  let i = 2;
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-section",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".services-section", {
      opacity: 0,
      y: 200,
    }).from(".services-section .gsapText", {
      opacity: 0,
    });
  }, {});
  const services = servicesData.map((serv) => (
    <div
      key={serv.id + i}
      className={`main-div div${serv.id}   bg-cover bg-center border-r-[1px_solid_white] h-[720px] text-white relative flex-[1] flex justify-end   flex-col px-[32px] py-[0] pb-[32px] overflow-hidden`}
    >
      <div className={`service serv${serv.id}`}>
        <h2 className="text-[white] gsapText text-[40px] not-italic font-bold leading-[normal] ">
          {serv.title}
        </h2>
        <ul className="[list-style:disc] ml-[22px] mt-[16px] [transition:0.4s]">
          {serv.list.map((li) => (
            <li
              key={i++}
              className="relative text-[white] text-[24px] not-italic font-normal leading-[160%] tracking-[0.302px] [transition:0.4s] max-w-[346px]"
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
  return (
    <section className="services-section grid grid-cols-3">{services}</section>
  );
}

export default ServicesSection;
