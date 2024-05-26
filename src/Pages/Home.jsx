/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import SlideText from "../components/SlideText/SlideText";
import ServicesSection from "../sections/ServicesSection";
import ProjectsSection from "../sections/ProjectsSection";
import PartnersSection from "../sections/PartnersSection";
import GetStarted from "../components/GetStarted/GetStarted";

function Home() {
  return (
    <div className="home" key={2}>
      <Hero />
      <AboutSection />
      <SlideText text="ENGINEERING SERVICES & CONSULTANCY CENTER." />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <GetStarted />
    </div>
  );
}

export default Home;
