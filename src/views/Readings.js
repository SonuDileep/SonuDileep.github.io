import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ReadingsPage from "components/Readings/Readings.js";

function Readings() {
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
      <ReadingsPage />
    </>
  );
}

export default Readings;
