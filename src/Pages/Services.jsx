/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../sections/Landing";
import ServicesCard from "../components/cards/ServicesCard";
import GetStarted from "../components/GetStarted/GetStarted";

function Services() {
  return (
    <div className="services">
      <Landing name="our services" page="services" to="/services" />
      <ServicesCard />
      <GetStarted />
    </div>
  );
}

export default Services;
