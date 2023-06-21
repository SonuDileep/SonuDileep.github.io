import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Whatelse from '../components/Whatelse/Whatelse';

export function Whtelse() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <Whatelse />}
    </div>
  );
}


