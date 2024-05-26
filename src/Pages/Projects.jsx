/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../sections/Landing";
import projectsData from "../json/projects.json";
import MainBtn, { Arrow } from "../components/Buttons/MainBtn";
import GetStarted from "../components/GetStarted/GetStarted";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
      },
    });
    tl.from(".projects .projects-list ", {
      opacity: 0,
      y: 100,
    });
  }, {});
  const projects = projectsData.map((project) => {
    return (
      <div
        key={project.id}
        className="card flex flex-col justify-center items-center "
      >
        <div className="img-holder w-full  h-[240px]">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            src={project.mainImage}
            alt=""
            className="w-full    h-[240px]"
          />
        </div>
        <div className="info w-full flex flex-col justify-center items-center lg:items-start px-4 pt-8 overflow-hidden">
          <h2 className="text-[#2a354c] text-left text-[20px]  lg:text-[24px] w-full   not-italic font-semibold leading-[normal] uppercase h-[130px] max-h-full">
            {project.cardTitle}
          </h2>
          <MainBtn
            to={`/projects/${project.id}`}
            name="View Project"
            className="border-main-blue text-main-blue bottom-[0] lg:bottom-[-60px]  lg:w-fit w-full lg:justify-start  py-[10px] px-8 text-[15px] text-center "
            icon={<Arrow />}
          />
        </div>
      </div>
    );
  });
  return (
    <div className="projects" key={4}>
      <Landing name="our projects" page="projects" to="/projects" />
      <div className="container ">
        <div className="projects-list  grid xlg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-28 pt-14">
          {projects}
        </div>
      </div>
      <GetStarted />
    </div>
  );
}

export default Projects;
