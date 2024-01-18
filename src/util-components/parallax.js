// Parallax.js
import React, { useEffect, useState } from 'react';
import '../styling/util-styles/parallax.css';

const Parallax = ({ children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div className="parallax" style={{ transform: `translateY(${offset * 0.5}px)` }}>
      {children}
    </div>
  );
};

export default Parallax;
