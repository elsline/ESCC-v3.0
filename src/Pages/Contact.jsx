/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../sections/Landing";
import map from "../imgs/contact/map.jpg";
import aboutImg from "../imgs/homeImgs/aboutSection.jpg";
import gps from "../imgs/contact/googlemaps.png";
import "../components/Buttons/styles/buttons.css";
import ContactCard from "../components/cards/ContactCard";
import Form from "../components/Form/Form";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact() {
  const handleCallClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailClick = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleClick = () => {
    window.open("https://shorturl.at/Dw0iY", "_blank");
  };
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact .contact-info .card",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    gsap.from(".contact .contact-images", {
      duration: 1,
      opacity: 0,
      y: 200,
    });
    tl.from(".contact .contact-info .card", {
      stagger: { amount: 1 },
      opacity: 0,
      x: 200,
    }).from(
      ".contact .Form",
      {
        opacity: 0,
      },
      0
    );
    // tl.from;
  }, {});
  return (
    <div className="contact">
      <Landing name="GET STARTED WITH US TODAY" page=" CONTACT" />
      <div className="contact-images">
        <div className="">
          <div className="img-div flex lg:flex-row  flex-col-reverse lg:gap-8 gap-4">
            <div className="img1 flex-1 relative ">
              <div className="locationBtn" onClick={handleClick}>
                <div className="gps">
                  <img src={gps} alt="" className="w-full  " />
                </div>
              </div>
              <img src={map} alt="" className="w-full" />
            </div>
            <div className="img2 flex-1 ">
              <img src={aboutImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form lg:py-28 py-14">
        <div className="container flex  lg:flex-row flex-col justify-between items-center">
          <div className="contact-info flex flex-col lg:gap-14 gap-8">
            <ContactCard
              name="VISIT US"
              icon={
                <i className="fa-solid fa-house text-[20px] lg:text-[24px] flex items-center text-[#2a354c]"></i>
              }
              info="New Cairo, Mohamed Naguib Axis, Waterway 1 Mall, Office Building 1, BS 08 , 2nd floor"
            />
            <ContactCard
              name="CALL US"
              icon={
                <i className="fa-solid fa-phone  text-[20px] lg:text-[24px] flex items-center text-[#2a354c]"></i>
              }
              info={
                <div className="flex flex-col gap-2">
                  <span onClick={() => handleCallClick(+201001303001)}>
                    Phone: +201001303001
                  </span>
                  <span onClick={() => handleCallClick(+201111101331)}>
                    Mobile: +201111101331
                  </span>
                </div>
              }
            />
            <ContactCard
              name="EMAIL US"
              icon={
                <i className="fa-solid fa-envelope text-[20px] lg:text-[24px] flex items-center text-[#2a354c]"></i>
              }
              info={
                <div className="flex flex-col gap-2">
                  <span
                    className="text-wrap flex"
                    onClick={() =>
                      handleEmailClick("Hesham.mamesh@esccgroup.com")
                    }
                  >
                    Hesham.mamesh@esccgroup.com
                  </span>
                  <span
                    onClick={() =>
                      handleEmailClick("Karim.mamesh@esccgroup.com")
                    }
                  >
                    Karim.mamesh@esccgroup.com
                  </span>
                </div>
              }
            />
          </div>
          <div className="Form lg:pt-0 pt-14">
            <div className="form-background">
              <div className="form-container">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
