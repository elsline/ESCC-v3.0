/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import LogoLoading from "./LogoLoading";

function TransitionWrapper({ children }) {
  const container = useRef(null);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  useGSAP(() => {
    if (children.key !== displayedChildren.key) {
      gsap
        .to(container.current, {
          zIndex: 10000,
          scaleX: 1,
          transformOrigin: "right",
          ease: "slow(0.9,0.7,false)",
          duration: 0.8,
        })
        .then(() => {
          setDisplayedChildren(children);
          window.scrollTo({ top: 0, behavior: "instant" });
          gsap.to(container.current, { transformOrigin: "left" });
          gsap.to(container.current, {
            zIndex: "0",
            scaleX: 0,
            ease: "slow(0.9,0.7,false)",
            duration: 0.8,
          });
        });
    }
  }, [children]);

  return (
    <div className="ESCC">
      <div
        ref={container}
        className="loadScreen w-screen h-screen z-[0] bg-sec-blue fixed opacity-100   origin-right  scale-x-0"
      ></div>
      {displayedChildren}
    </div>
  );
}

export default TransitionWrapper;
