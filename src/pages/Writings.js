import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Writings from '../components/Writings/Writings';

export function Writing() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <Writings />}
    </div>
  );
}
