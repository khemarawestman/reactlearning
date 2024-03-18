import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div>
      <h2>Tack för ditt köp!</h2>
      <Link to="/">Tillbaka till evenemangslistan</Link>
    </div>
  );
};

export default ThankYou;
