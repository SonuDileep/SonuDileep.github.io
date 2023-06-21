import React, { useState } from "react";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";

export function Home() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <Homepage />}
    </div>
  );
}

export default Home;
