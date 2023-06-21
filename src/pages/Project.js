import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Projectlist from '../components/Projectlist/Projectlist';

export function Project() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {!isNavExpanded && <Projectlist />}
    </div>
  );
}

