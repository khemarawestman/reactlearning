import React from "react";
import { useState } from "react";

const SearchMovie = (props) => {
  const [query, setQuery] = useState("Hej");
  const { setMovies } = props;

  function handleInput(event) {
    setQuery(event.target.value);
  }

  async function handleClick() {
    const URL = "http://www.omdbapi.com/?apikey=37fe945a";
    const response = await fetch(`${URL}&s=${query}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  }

  return (
    <div>
      <section>
        <label htmlFor="search">Film</label>
        <input type="text" id="search" onKeyUp={handleInput} />
        <button onClick={handleClick}>Sök film</button>
      </section>
    </div>
  );
};

export default SearchMovie;