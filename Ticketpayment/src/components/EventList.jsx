import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events');
      const data = await response.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id} onClick={() => navigate(`/confirm`, { state: { event } })}>
          {event.name} - {event.date}
        </div>
      ))}
    </div>
  );
};

export default EventList;
