/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SecTitle2 from "../components/Titles/SecTitle2";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


function WhoWeAre(props) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".WhoWeAre",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".WhoWeAre", {
      opacity: 0,
      y: 50,
    });
  }, {});

  return (
    <section ref={props.rf} className="WhoWeAre lg:py-28 py-14" id="WhoWeAre" >
      <div className="container">
        <SecTitle2 title="WHO WE ARE!" />
        <div className="flex flex-col justify-center items-center">
          <p className=" text-sec-blue text-center font-[Montserrat] lg:text-[20px] text-[18px] not-italic font-normal leading-[24px] max-w-[335px]   lg:leading-[32px] lg:max-w-[1008px] flex justify-center">
            ESCC was established in 1996 by Engineer & Consultant Hesham Mokhtar
            Mamish which in he had a vision that still leads us and drives us
            for excellency every single day. ESCC ’s center strength lies in its
            multidisciplinary performances, dynamism & work flexibility due to
            synergetic use & management of human, technical & organization
            resources, which are completed and coordinated according to our
            clients specific project requirement, we also help customers deliver
            projects of purpose that create a lasting positive legacy.
          </p>
          <span className="lg:pt-[32px] pt-[26px] justify-center  text-sec-blue text-center font-[Montserrat] text-[18px] lg:text-[20px] not-italic font-medium leading-[32px]">
            Since 1996 till today
          </span>
          <p className=" text-sec-blue text-center font-[Montserrat] lg:text-[20px] text-[18px] not-italic font-normal leading-[24px] max-w-[335px]   lg:leading-[32px] lg:max-w-[1008px] flex justify-center">
            We had the honour to help customers complete more than 50 projects
            in 8 countries all over the world. Distinguished by the quality of
            our people and our persistent drive to deliver the most successful
            outcomes, we align our capabilities to our customers’ objectives to
            create a lasting positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
