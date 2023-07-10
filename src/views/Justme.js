import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import JustmePage from "components/Justme/Justme.js";

function Justme() {
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
      <JustmePage />
    </>
  );
}

export default Justme;
