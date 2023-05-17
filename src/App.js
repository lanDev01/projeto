import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters, ] = useState([]);

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="bg-dark">
      <Navbar brand="Rick And Morty" />;
      
      <div className="container mt-5">
        <Characters characters={characters}/>
      </div>
    </div>
  );
}

export default App;
