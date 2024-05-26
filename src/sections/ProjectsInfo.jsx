/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectsInfo(props) {
  const { projectData } = props;
  return (
    <div className="projectInfo container flex flex-col justify-center   items-center  lg:pt-14 pt-10">
      <div className="img-div  lg:!w-[1008px] !w-full !h-auto  !lg:h-[416px]">
        <LazyLoadImage
          effect="blur"
          src={projectData.mainImage}
          alt=""
          className=" `md:!h-full !h-full lg:!w-[1008px] lg:!h-[477px] md:!w-full !w-full"
        />
      </div>
      <div className="main-info  justify-center flex-col items-center w-full lg:flex hidden">
        <div className="first-infos flex justify-around items-center w-[1008px] px-[32px] py-[0] border-[1px] border-[solid] border-[#e7e8ea]">
          <span className="info flex justify-center items-start flex-col gap-[12px] w-full border-r-[1px_solid_#e7e8ea] px-[0] py-[25px]">
            <span className="info-title text-[#0300ff] text-center font-[Montserrat] text-[20px] not-italic font-medium leading-[30px] uppercase">
              CLIENT{" "}
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat] text-[18px] not-italic font-normal leading-[20px] capitalize max-w-[270px]">
              {projectData.client}
            </span>
          </span>
          <span className="info flex justify-center items-start flex-col gap-[12px] w-full border-r-[1px_solid_#e7e8ea] px-[0] py-[25px]">
            <span className="info-title  text-[#0300ff] text-center font-[Montserrat] text-[20px] not-italic font-medium leading-[30px] uppercase">
              location{" "}
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat] text-[18px] not-italic font-normal leading-[20px] capitalize max-w-[270px]">
              {projectData.location}
            </span>
          </span>
          <span className="info flex justify-center items-start flex-col gap-[12px] w-full border-r-[1px_solid_#e7e8ea] px-[0] py-[25px]">
            <span className="info-title text-[#0300ff] text-center font-[Montserrat] text-[20px] not-italic font-medium leading-[30px] uppercase">
              Completed
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat] text-[18px] not-italic font-normal leading-[20px] capitalize max-w-[270px]">
              {projectData.completed}
            </span>
          </span>
        </div>
      </div>
      <div className="main-info  justify-center flex-col items-center w-full lg:hidden flex">
        <div className="first-infos pb-[20px] flex flex-col justify-around items-center w-full  py-[0] border-[1px] border-[solid] border-[#e7e8ea]">
          <span className="info flex justify-between items-start flex-row gap-[12px] border-b-[1px] border-[#e7e8ea] w-full border-r-[1px_solid_#e7e8ea] px-[24px] py-[20px]">
            <span className="info-title text-[#0300ff] text-center font-[Montserrat] text-[18px] not-italic font-medium leading-[30px] uppercase">
              CLIENT{" "}
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat]  not-italic font-normal text-[16px] leading-[16px]  capitalize max-w-[270px]">
              OVO Egg
            </span>
          </span>
          <span className="info flex justify-between items-start flex-row gap-[12px] border-b-[1px] border-[#e7e8ea] w-full border-r-[1px_solid_#e7e8ea] px-[24px] py-[20px]">
            <span className="info-title  text-[#0300ff] text-center font-[Montserrat] text-[18px] not-italic font-medium leading-[30px] uppercase">
              location{" "}
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat]  not-italic font-normal text-[16px] leading-[16px]  capitalize max-w-[270px]">
              Egypt, 6th of October City
            </span>
          </span>
          <span className="info flex  justify-between items-start flex-row gap-[12px]  w-full border-r-[1px_solid_#e7e8ea] px-[24px] pt-[20px]">
            <span className="info-title text-[#0300ff] text-center font-[Montserrat] text-[18px] not-italic font-medium leading-[30px] uppercase">
              Completed
            </span>
            <span className="info-about text-[#2a354c] text-center font-[Montserrat] text-[16px] leading-[16px]  not-italic font-normal  capitalize max-w-[270px]">
              2021
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsInfo;
