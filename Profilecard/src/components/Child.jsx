import React from 'react';

function Child({ message, energy }) {
  const energyStatus = energy && energy > 9000 ? "Energy: it's over 9000" : "Energy: low";
  return (
    <div>
      <p>{message}</p>
      {energy && <p>{energyStatus}</p>}
    </div>
  );
}

export default Child;
