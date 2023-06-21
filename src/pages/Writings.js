import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Writings from '../components/Writings/Writings';

export function Writing() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    setIsPageVisible(!isNavExpanded); // Set page visibility based on navigation state
  }, [isNavExpanded]);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      {isPageVisible && <Writings />}
    </div>
  );
}
