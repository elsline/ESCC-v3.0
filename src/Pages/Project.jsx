/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProjectLand from "../sections/ProjectLand";

import GetStarted from "../components/GetStarted/GetStarted";
import SecBtn, { Arrow } from "../components/Buttons/SecBtn";
import projectsData from "../json/projects.json";
import ProjectGallery from "../sections/ProjectGallery";
import ProjectsInfo from "../sections/ProjectsInfo";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Project() {
  
  const { projectID } = useParams();
  const [project, setProject] = useState(0);
  const [page, setPage] = useState(0);

  const projectData = projectsData[project];
  const projectIndex = projectsData.findIndex((proj) => proj.id == projectID);

  useEffect(() => {
    if (projectID == projectIndex + 1) {
      const newIndex = projectIndex;
      setProject(newIndex);
    }
  }, []);
  let projectIDNum = Number(projectID);

  const nextEvent = () => {
    const to = projectIndex + 1;
    setProject(to);
  };
  const previous = () => {
    const to = projectIndex - 1;
    setProject(to);
  };

  return (
    <div className="project-page" >
      <ProjectLand
        page="projects"
        to={`/projects`}
        name={projectData.pageTitle}
        projectName={`/projects/${projectData.id}`}
        projectPage={projectData.cardTitle}
      />
      <ProjectsInfo projectData={projectData} />
      <ProjectGallery project={project} />
      <div className="btns-projects lg:pt-28 pt-14">
        <div className="container flex justify-between ">
          <Link
            to={`/projects/${projectIDNum - 1}`}
            onClick={previous}
            className={` secBtn previous uppercase  tr-4 flex items-center gap-2 text-[#9197a3]  lg:text-[16px] text-[12px]   font-medium hover:text-[#2a354c]   cursor-pointer`}
          >
            <Arrow />
            Previous Project
          </Link>
          <SecBtn
            to={`/projects/${projectIDNum + 1}`}
            onClick={nextEvent}
            name="Next Project"
            className=" text-[20px] lg:text-[24px]"
          />
        </div>
      </div>
      <GetStarted />
    </div>
  );
}

export default Project;
