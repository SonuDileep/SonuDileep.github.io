import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HomePage from "components/Home/Home.js";

function Home() {
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
      <HomePage />
    </>
  );
}

export default Home;
