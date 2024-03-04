import React from 'react';

function ProfileCard({ name, title }) {
    const imgUrl = "https://pedagog.stockholm/media/2017/medioteket-kompetensutveckling-memes.jpg?cc=0,0,0.1,0&width=800&v=1d9946b055469d0";
  return (
    <div className="profile-card">
    <img src={imgUrl} alt="Profile" />
    <h2>{name}</h2>
    <p>{title}</p>
    <button>Kontakta mig</button>
  </div>
  );
}

export default ProfileCard;
