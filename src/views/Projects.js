import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProjectsPage from "components/Projects/Projects.js";

function Projects() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProjectsPage />
    </>
  );
}

export default Projects;
