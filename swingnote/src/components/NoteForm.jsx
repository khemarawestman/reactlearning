import React, { useState } from 'react';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      note: text
    });
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Anteckning" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button type="submit">Spara</button>
    </form>
  );
};

export default NoteForm;
