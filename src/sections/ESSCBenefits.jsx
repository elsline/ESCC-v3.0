/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SecTitle2 from "../components/Titles/SecTitle2";
import Benefit from "../components/benefit/Benefit";
import { Icon } from "../components/benefit/icons";
import { Icon2 } from "../components/benefit/icons";
import { Icon3 } from "../components/benefit/icons";
import { Icon4 } from "../components/benefit/icons";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function ESSCBenefits(props) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ESSCBenefits",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".ESSCBenefits .gsapText", {
      opacity: 0,
      y: 50,
    }).from(".ESSCBenefits .benefit", {
      opacity: 0,
      y: 50,
      stagger: { amount: 1 },
    });
  }, {});
  return (
    <section
      className="ESSCBenefits lg:py-28 py-14 bg-white relative"
      id="ESSCBenefits"
    >
      <div className="container">
        <SecTitle2 title="ESSC BENEFITS" className="gsapText" />
        <div className="flex  flex-wrap justify-center lg:gap-8 gap-6 items-center ">
          <Benefit
            icon={<Icon />}
            title="Innovations & evolution"
            paragraph="We keep on updating with the latest technology and applying the latest analysis techniques to come up with the best solution."
            mobileTitle="
            Innovations & evolution"
          />
          <Benefit
            icon={<Icon2 />}
            title="Lasting partnership"
            paragraph="Strong partnerships build mutual success. We achieve this with proper alignment, communication and trust throughout the whole project."
          />
          <Benefit
            icon={<Icon3 />}
            title="Cost / Quality balance"
            paragraph="Given to our almost 30 years experience in the field and market, we ensure your project is delivered with optimum quality and price"
          />
          <Benefit
            icon={<Icon4 />}
            title="Always new targets"
            paragraph="New Targets = New Achievements. This is what we strive for. Whether projects or partners, we never stop."
          />
        </div>
      </div>
    </section>
  );
}

export default ESSCBenefits;
