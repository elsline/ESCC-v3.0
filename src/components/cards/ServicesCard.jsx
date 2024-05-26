/* eslint-disable no-unused-vars */
import React from "react";
import servicesData from "./services.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function ServicesCard() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services .services-card .service-1",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 0.6,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services .services-card .service-2",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 0.6,
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services .services-card .service-3",
        start: "top center",
        end: "bottom center",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 0.6,
      },
    });
    tl.from(".services .services-card .service-1 .service-info h3", {
      opacity: 0,
      y: 100,
    })
      .from(".services .services-card .service-1 .service-info ul li", {
        opacity: 0,
        y: 100,
        stagger: { amount: 0.5 },
      })
      .from(".services .services-card .service-1 .line2", {
        transformOrigin: "top",
        scaleY: 0,
      })
      .from(".services .services-card .service-1 .line1", {
        transformOrigin: "left",
        scaleX: 0,
      })
      .from(".services .services-card .service-2 .line3", {
        transformOrigin: "top",
        scaleY: 0,
      });

    tl2
      .from(".services .services-card .service-2 .service-info h3", {
        delay: 0.5,
        opacity: 0,
        y: 100,
      })
      .from(".services .services-card .service-2 .service-info ul li", {
        delay: 0.5,
        opacity: 0,
        y: 100,
        stagger: { amount: 0.5 },
      })
      .from(".services .services-card .service-2 .line2", {
        transformOrigin: "top",
        scaleY: 0,
      })
      .from(".services .services-card .service-2 .line1", {
        transformOrigin: "right",
        scaleX: 0,
      })
      .from(".services .services-card .service-3 .line3", {
        transformOrigin: "top",
        scaleY: 0,
      });
    tl3
      .from(".services .services-card .service-3 .service-info h3", {
        delay: 0.5,
        opacity: 0,
        y: 100,
      })
      .from(".services .services-card .service-3 .service-info ul li", {
        delay: 0.5,
        opacity: 0,
        y: 100,
        stagger: { amount: 0.5 },
      });
  }, {});
  const serv = servicesData.map((serv) => (
    <div
      key={serv.id}
      className={`service lg:pb-28 pb-14 w-full service-${serv.id} lg:flex-row flex-col gap-3 flex    items-center lg:justify-between  lg:items-center relative lg:gap-28`}
    >
      <div className="line line1"></div>
      <div className="img-line min-w-[490px] relative ">
        <div className="line line2 "></div>
        <div className="line line3"></div>
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          className="service-image w-full"
          src={serv.image2}
          alt=""
        />
      </div>
      <div className="service-info">
        <h3 className=" text-sec-blue  text-[24px] lg:text-[39px] not-italic font-medium leading-[normal] uppercase">
          {serv.title}
        </h3>
        <ul className="[list-style:disc] ml-[20px] mt-[16px]">
          {serv.list.map((li) => (
            <li
              key={1}
              className="relative    text-sec-blue text-[16px]  lg:text-[24px] not-italic font-normal leading-[160%] tracking-[0.302px]"
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
  return (
    <div className="services-card lg:pt-28  pt-14">
      <div className="container">
        <div className="flex flex-col justify-center items-center">{serv}</div>
      </div>
    </div>
  );
}

export default ServicesCard;
