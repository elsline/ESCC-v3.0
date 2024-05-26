/* eslint-disable no-unused-vars */
import React from "react";
import {
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Certificates from "../Pages/Certificates";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import About from "../Pages/About";
import ScrollToTop from "./ScrollToTop";
import TransitionWrapper from "../components/Transition/TransitionWrapper";
// const Home = React.lazy(() => import("../Pages/Home"));
// const Services = React.lazy(() => import("../Pages/Services"));
// const Projects = React.lazy(() => import("../Pages/Projects"));
// const Certificates = React.lazy(() => import("../Pages/Certificates"));
// const Contact = React.lazy(() => import("../Pages/Contact"));
// const Project = React.lazy(() => import("../Pages/Project"));
// const About = React.lazy(() => import("../Pages/About"));

function AppRouter() {
  const location = useLocation();
  const MainRouter = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const ContactUS = () => {
    return (
      <>
        <Header className="contactUsHeader" />
        <Outlet />
        <Footer />
      </>
    );
  };
  const ProjectRoute = () => {
    return (
      <>
        <Header className="contactUsHeader" />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <>
      <ScrollToTop />
      <TransitionWrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainRouter />}>
            <Route key={location.pathname} path="/" element={<Home />} />
            <Route key={location.pathname} path="/about" element={<About />} />
            <Route
              key={location.pathname}
              path="/services"
              element={<Services />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route
              key={location.pathname}
              path="/certificates"
              element={<Certificates />}
            />
          </Route>
          <Route path="/" element={<ContactUS />}>
            <Route
              key={location.pathname}
              path="/contact"
              element={<Contact />}
            />
          </Route>
          <Route path="/" element={<ProjectRoute />}>
            <Route
              key={location.pathname}
              path="/projects/:projectID"
              element={<Project />}
            />
          </Route>
        </Routes>
      </TransitionWrapper>
    </>
  );
}

export default AppRouter;
