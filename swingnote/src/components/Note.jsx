import React from 'react';

const Note = ({ note, onUpdate, onDelete }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.note}</p>
      <button onClick={() => onDelete(note.id)}>Ta bort</button>
     
    </div>
  );
};

export default Note;
