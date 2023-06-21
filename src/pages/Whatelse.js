import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Whatelse from '../components/Whatelse/Whatelse';

export function Whtelse() {
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
      {isPageVisible && <Whatelse />}
    </div>
  );
}
