import React from 'react';

const Handle = () => {
  function handleClick() {
    alert('Button was clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}

export default Handle;
