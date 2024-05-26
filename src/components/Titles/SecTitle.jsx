/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SecTitle(props) {
  return (
    <h3
      className={`sec-title block  text-${props.color}  ${props.className}`}
    >
      {props.title}
    </h3>
  );
}

export default SecTitle;
