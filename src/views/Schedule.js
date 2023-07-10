import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SchedulePage from "components/Schedule/Schedule.js";


function Schedule() {
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
      <SchedulePage />
    </>
  );
}

export default Schedule;
