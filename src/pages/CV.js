import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CVpage from '../components/CV/CV';

export function CV() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <CVpage />}
    </div>
  );
}
