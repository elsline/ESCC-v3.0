/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function LenisScroll({ children }) {
  // Example usage of useLenis hook if needed
  useLenis((lenis) => {
    // You can configure or interact with lenis instance here if necessary
    console.log("Lenis instance:", lenis);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisScroll;
