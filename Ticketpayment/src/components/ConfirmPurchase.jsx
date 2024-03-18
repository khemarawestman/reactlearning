import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPurchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state;

  return (
    <div>
      <h2>Bekräfta ditt köp</h2>
      <p>Evenemang: {event.name}</p>
      <p>Datum: {event.date}</p>
      <button onClick={() => navigate("/thank-you")}>Bekräfta Köp</button>
    </div>
  );
};

export default ConfirmPurchase;
