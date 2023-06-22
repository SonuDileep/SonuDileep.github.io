import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Homepage from '../components/Homepage/Homepage';

export function Home() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const threshold = 100; // Adjust the threshold value as needed

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
    <div >
      {isHeaderVisible && (
        <Header toggleNav={toggleNav} isNavExpanded={isNavExpanded} />
      )}
      {!isNavExpanded && <Homepage />}
    </div>
  );
}
