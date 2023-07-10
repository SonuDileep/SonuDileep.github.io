import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import CVPage from "components/CV/CV.js";

function CV() {
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
      <CVPage />
    </>
  );
}

export default CV;
