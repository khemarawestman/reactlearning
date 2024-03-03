import React, { useState } from 'react';
import './heading.css'
function Heading() {
  const [ticket, setTicket] = useState({
    classType: 'secondClass',
    ticket: '',
    title: 'Ms.',
    firstName: '',
    lastName: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTicket({
      ...ticket,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(" Här är informationen om din biljett:\n" + JSON.stringify(ticket, null, 2));

    console.log(ticket);
  };

  return (
    <form onSubmit={handleSubmit} className="train-ticket-form">
    <h1>ÅKA TÅG</h1>
    <div className="route-info">
      <strong>STOCKHOLM</strong> <span>→</span> <strong>GÖTEBORG</strong>
      <div className="time">10:30 - 14:45</div>
    </div>
    
    <div className="radio-group">
      <label>
        <input
          type="radio"
          name="classType"
          value="secondClass"
          checked={ticket.classType === 'secondClass'}
          onChange={handleChange}
        />
        2:a klass
      </label>
      
      <label>
        <input
          type="radio"
          name="classType"
          value="firstClass"
          checked={ticket.classType === 'firstClass'}
          onChange={handleChange}
        />
        1:a klass
      </label>
    </div>
    
    <select name="ticketCount" value={ticket.ticketCount} onChange={handleChange}>

      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <select name="title" value={ticket.title} onChange={handleChange}>
      <option value="Ms.">Ms.</option>
      <option value="Mr.">Mr.</option>
     
    </select>

    <input
      type="text"
      name="firstName"
      value={ticket.firstName}
      placeholder="Förnamn"
      onChange={handleChange}
    />
    
    <input
      type="text"
      name="lastName"
      value={ticket.lastName}
      placeholder="Efternamn"
      onChange={handleChange}
    />

    <label className="checkbox-group">
      <input
        type="checkbox"
        name="termsAccepted"
        checked={ticket.termsAccepted}
        onChange={handleChange}
      />
      Godkänner villkoren
    </label>

    <button type="submit">Boka biljetter</button>
  </form>
);
}

export default Heading;
