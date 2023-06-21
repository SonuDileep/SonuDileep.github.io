import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Readings from '../components/Readings/Readings';

export function Reading() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <Readings />}
    </div>
  );
}

