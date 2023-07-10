import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Home from "views/Home.js";
import CV from "views/CV.js";
import Justme from "views/Justme.js";
import Projects from "views/Projects.js";
import Readings from "views/Readings.js";
import Writings from "views/Writings.js";
import Schedule from "views/Schedule.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/writings" element={<Writings />} />
      <Route path="/readings" element={<Readings />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/justme" element={<Justme />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </BrowserRouter>
);
