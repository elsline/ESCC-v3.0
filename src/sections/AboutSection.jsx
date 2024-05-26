/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SecTitle from "../components/Titles/SecTitle";
import MainBtn from "../components/Buttons/MainBtn";
import arrow from "../imgs/SVG/arrow.svg";
import aboutImg from "../imgs/homeImgs/aboutSection.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function AboutSection() {
  const numsRef = useRef([]);
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const nums = numsRef.current;
    const section = sectionRef.current;

    const handleScroll = () => {
      if (window.scrollY >= section.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
          setStarted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [started]);
  const startCount = (el) => {
    const goal = el.dataset.goal;
    let currentCount = 0;
    const increment = () => {
      currentCount++;
      if (currentCount <= goal) {
        el.textContent = currentCount;
        if (goal !== "1996") {
          el.textContent = "+" + el.textContent;
        }
        setTimeout(increment, 3000 / goal);
      }
    };
    increment();
  };
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 750px",
        end: "bottom 750px",
        markers: false,
        scrub: false,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.from(".about-section .gsapImg", {
      filter: "blur(15px)",
    })
      .from(
        ".about-section .gsapText",
        {
          x: 50,
          opacity: 0,
        },
        0
      )
      .from(".about-section .prog", {
        opacity: 0,
        stagger: { amount: 1 },
      });
  }, {});
  return (
    <section className="about-section relative lg:py-24 py-14  bg-sec-blue overflow-hidden ">
      <div className="line-container container flex justify-between items-center w-full h-full top-0 left-[50%] translate-x-[-50%] absolute z-[0] ">
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
        <div className="line  w-[1px] h-full bg-[#404a5e]"></div>
      </div>
      <div className="container relative ">
        <div className="grid grid-cols-2 z-[1] ">
          <div className=" col-span-2 lg:col-span-1 lg:hidden  block   ">
            <div className="img-holder max-w-[330px] "></div>
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              className="w-full "
              src={aboutImg}
              alt=""
            />
          </div>
          <div className="gsapText lg:col-span-1 col-span-2 lg:block flex  flex-col justify-center items-center ">
            <SecTitle
              title="EST. 1996"
              color="white"
              className=" lg:text-left  lg:py-0  py-[24px] max-w-[fit-content] lg:after:hidden lg:pl-[66px]  pl-[32px] text-center lg:before:flex before:hidden   after:content-[''] after:absolute after:w-[25px] after:h-[4px] after:bg-white after:left-[0]  after:top-1/2 after:translate-y-[-50%] "
            />
            <h2 className=" text-center my-0 mb-4 lg:text-left text-white text-[32px] lg:text-[40px] not-italic font-medium leading-[normal] uppercase  max-w-[700px] lg:my-4">
              OUR HERITAGE IS BUILDING YOUR FUTURE
            </h2>
            <p className="lg:text-[20px] text-[17px] not-italic font-normal leading-[32px] mb-8 text-[white] opacity-70 max-w-[600px]">
              ESCC is a multinational company for more than 20 years excelling
              in engineering and construction contracting focusing on industrial
              projects.
            </p>
            <MainBtn
              to={"/about"}
              name="Know More"
              icon={<img src={arrow} className="w-5 h-5" alt="" />}
            />
          </div>
          <div className="lg:col-span-1 col-span-2 lg:block  hidden   ">
            <div className="img-holder absolute  right-[-190px]  top-[-45px]"></div>
            <img
              loading="lazy"
              className=" absolute right-[-190px] top-[-45px] gsapImg"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div
          ref={sectionRef}
          className="progress-counter lg:pt-24 pt-12 text-[white] grid grid-cols-[repeat(2,1fr)]  lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]   gap-x-8 lg:gap-y-20 gap-y-10  w-full relative bottom-[0]  pb-[56px]"
        >
          <div className="prog ">
            <div className="num">1996</div>
            <span>Founded</span>
          </div>
          <div className="prog ">
            <div
              className="num"
              ref={(el) => (numsRef.current[0] = el)}
              data-goal="50"
            >
              0
            </div>
            <span>Employees</span>
          </div>
          <div className="prog ">
            <div
              className="num"
              ref={(el) => (numsRef.current[1] = el)}
              data-goal="54"
            >
              0
            </div>
            <span>Clients</span>
          </div>
          <div className="prog  ">
            <div
              className="num"
              ref={(el) => (numsRef.current[2] = el)}
              data-goal="92"
            >
              0
            </div>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
