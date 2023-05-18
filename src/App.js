import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div className="p-0 m-0">
      <div className=" bg-dark">
        <Navbar brand="Rick And Morty" />;
        <Search />
      </div>
      <div className="container mt-0">
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default App;
