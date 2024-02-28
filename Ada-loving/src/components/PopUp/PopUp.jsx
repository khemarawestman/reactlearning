import React from 'react';
import './popUp.css'; 

const PopUp = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
