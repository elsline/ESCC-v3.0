/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import MegaIcon from "../MegaMenu/MegaIcon";
import MegaMenu from "../MegaMenu/MegaMenu";

function Nav() {
  return (
    <nav className="navBar">
      <ul className="links  justify-center items-center gap-8 lg:flex  hidden">
        <NavLink to={"/"} className="navLink ">
          <span>Home</span>
        </NavLink>
        <NavLink  to={"/about"} className="navLink" >
          <span>About</span>
        </NavLink>
        <NavLink to={"/services"} className="navLink">
          <span>Services</span>
        </NavLink>
        <NavLink to={"/projects"} className="navLink">
          <span>Projects</span>
        </NavLink>
        <NavLink to={"/certificates"} className="navLink">
          <span>Certificates</span>
        </NavLink>
      </ul>
      <MegaMenu />
    </nav>
  );
}

export default Nav;
