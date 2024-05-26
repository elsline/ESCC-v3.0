/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import projectsData from "../json/projects.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


function ProjectGallery(props) {
  const projectData = projectsData[props.project];
  const gallery = projectData.gallery.map((img) => {
    return (
      <SwiperSlide key={img} className="">
        <div className="gallery-image">
          <LazyLoadImage src={img} alt="" effect="blur" loading="lazy" />
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="gallery container lg:pt-28 pt-14">
      <span className="gallery-title text-[#2a354c] text-center font-[Montserrat]  text-[32px] lg:text-[40px] not-italic font-medium leading-[32px] uppercase flex justify-center items-center">
        Project Gallery
      </span>
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
        className="mySwiper xlg:hidden md:hidden h-[360px]"
      >
        {gallery}
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper hidden xlg:hidden md:block h-[350px] "
      >
        {gallery}
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
        className="mySwiper xlg:block hidden h-[360px]"
      >
        {gallery}
      </Swiper>
    </div>
  );
}

export default ProjectGallery;
