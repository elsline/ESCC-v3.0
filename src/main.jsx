/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/tailwind.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop.jsx";
// import { AnimatePresence } from "framer-motion";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
