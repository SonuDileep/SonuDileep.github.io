import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import WritingsPage from "components/Writings/Writings.js";

function Writings() {
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
      <WritingsPage />
    </>
  );
}

export default Writings;
