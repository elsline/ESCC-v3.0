/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import MainBtn, { Arrow } from "../components/Buttons/MainBtn";
import projectsData from "../json/projects.json";
import SecTitle from "../components/Titles/SecTitle";
import SecBtn from "../components/Buttons/SecBtn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectsSection() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".projects-section", {
      opacity: 0,
      y: 200,
    });
  }, {});
  const swiperSlide = projectsData.map((slide) => {
    return (
      <SwiperSlide key={slide.id}>
        <div className="card flex flex-col justify-center items-center ">
          <div className="img-holder w-full  h-[240px]">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              src={slide.mainImage}
              alt=""
              className="w-full    h-[240px]"
            />
          </div>
          <div className="info w-full flex flex-col justify-center items-center lg:items-start px-4 pt-8 overflow-hidden">
            <h2 className="text-[#2a354c] text-left text-[20px]  lg:text-[24px] w-full   not-italic font-semibold leading-[normal] uppercase h-[130px] max-h-full">
              {slide.cardTitle}
            </h2>
            <MainBtn
              to={`/projects/${slide.id}`}
              name="View Project"
              className="border-main-blue text-main-blue bottom-[0] lg:bottom-[-60px]  lg:w-fit w-full lg:justify-start  py-[10px] px-8 text-[15px] text-center "
              icon={<Arrow />}
            />
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section className="projects-section relative" id="projects-section">
      <div className="container  pb-14 pt-8 lg:py-28 lg:pt-32 ">
        <div className="title  relative  z-10 lg:top-[-32px] md:top-0 top-8 w-full flex justify-between items-center">
          <SecTitle
            title="ESSC PROJECTS"
            color="black"
            className=" lg:text-left  lg:py-0  py-[0] max-w-[fit-content] lg:after:hidden lg:pl-[66px]  pl-[32px] text-center lg:before:flex before:hidden   after:content-[''] after:absolute after:w-[25px] after:h-[4px] before:bg-main-blue   after:bg-main-blue  after:left-[0]  after:top-1/2 after:translate-y-[-50%] "
          />
          <SecBtn to={"/projects"} name="VIEW ALL PROJECTS" icon={<Arrow />} />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            paddingTop: 100,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper xlg:hidden md:hidden h-[560px]"
        >
          {swiperSlide}
        </Swiper>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper hidden xlg:hidden md:block h-[480px] "
        >
          {swiperSlide}
        </Swiper>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
            paddingTop: 100,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper xlg:block hidden h-[480px]"
        >
          {swiperSlide}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSection;
