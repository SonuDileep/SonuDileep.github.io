import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Readings from '../components/Readings/Readings';

export function Reading() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const threshold = 30; // Adjust the threshold value as needed

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > threshold) ||
          currentScrollPos < threshold ||
          currentScrollPos === 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      {isHeaderVisible && <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />}
      {!isNavExpanded && <Readings />}
    </div>
  );
}
