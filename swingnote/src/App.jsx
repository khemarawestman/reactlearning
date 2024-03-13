import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  const [username, setUsername] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (username) {
        try {
          const response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data); // To inspect the structure
            if (data.success && Array.isArray(data.notes)) { // Check if the response is successful and data.notes is an array
              setNotes(data.notes);
            } else {
              console.log('Data is not in the expected format:', data);
              setNotes([]); // Or handle accordingly, maybe show an error message
            }
          } else {
            throw new Error('Failed to fetch notes');
          }
        } catch (error) {
          console.error("Error fetching notes:", error.message);
          setNotes([]); // Setting to empty array or handling the error as needed
        }
      }
    };
  
    fetchNotes();
  }, [username]); // Dependency on username

  const addNote = async (note) => {
    try {
      const response = await fetch('https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes', {
        method: 'POST',
        body: JSON.stringify({...note, username}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const newNote = await response.json();
        setNotes(prevNotes => [...prevNotes, newNote]); 
      } else {
        console.error("Failed to add note: Response was not OK.");
      }
    } catch (error) {
      console.error("Det gick inte att skapa en ny anteckning", error);
    }
  };
  
  const updateNote = async (id, updatedNote) => {
    try {
      const response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedNote),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setNotes(prevNotes => prevNotes.map(note => note.id === id ? {...note, ...updatedNote} : note));
      } else {
        console.error("Failed to update note: Response was not OK.");
      }
    } catch (error) {
      console.error("Det gick inte att uppdatera anteckningen", error);
    }
  };


  const deleteNote = async (id) => {
    try {
      const response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
      } else {
        console.error("Failed to delete note: Response was not OK.");
      }
    } catch (error) {
      console.error("Det gick inte att ta bort anteckningen", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ange användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} onUpdate={updateNote} onDelete={deleteNote} />
    </div>
  );
};

export default App;
