/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SecTitle2 from "../components/Titles/SecTitle2";
import CardHTW from "../components/cards/CardHTW";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function HowWeWork(props) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".HowWeWork",
        start: "top 800px",
        end: "bottom 800px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".HowWeWork .gsapText", {
      opacity: 0,
      y: 50,
    }).from(".HowWeWork .container .card", {
      opacity: 0,
      x: 100,
      stagger: { amount: 0.4 },
    });
  }, {});
  return (
    <section className="HowWeWork lg:py-28 py-14" id="HowWeWork">
      <div className="container">
        <SecTitle2 title="HOW WE WORK" className="text-white gsapText" />
        <div className="flex  justify-center gap-8 flex-wrap items-center">
          <CardHTW
            className="card1"
            number="01."
            title="IDENTIFYING YOUR NEED"
            paragraph="By applying excellent analysis method we understand your needs efficiently in order to start planning on the right track."
          />
          <CardHTW
            className="card2"
            number="02."
            title="PLANNING PROJECT"
            paragraph="Project planning is at the heart of the project life cycle. So it must be done right in order to develop and build the project correctly"
          />
          <CardHTW
            className="card3"
            number="03."
            title="DEVELOPING"
            paragraph="We efficiently apply what we planned so we can reach your goal with the best performance resulting the best quality on the right time."
          />
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
