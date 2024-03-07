
import React, { useState } from 'react';
import SearchMovies from './components/SearchMovies';
import './App.css'
import DisplayMovies from './components/DisplayMovies';
function App() {
  const [movies,setMovies] = useState([]);
  return (
   <div >
    <SearchMovies setMovies ={setMovies}/>
    <DisplayMovies movies ={movies}/>
   </div>
  )
}

export default App
