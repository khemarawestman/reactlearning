import React from 'react';
import Note from '../components/Note';

const NoteList = ({ notes, onUpdate, onDelete }) => {
    return (
      <div>
        {Array.isArray(notes) ? notes.map(note => (
          <Note key={note.id} note={note} onUpdate={onUpdate} onDelete={onDelete} />
        )) : <p>No notes found or notes data is not in the correct format.</p>}
      </div>
    );
  };

export default NoteList;
