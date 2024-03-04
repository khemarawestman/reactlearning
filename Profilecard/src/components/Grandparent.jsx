import React from 'react';
import Parent from './Parent';

function Grandparent() {
  const message = "Hej barnbarnet!";
  const energy = 9500; 

  
  return <Parent message={message} energy={energy} />;
}

export default Grandparent;
