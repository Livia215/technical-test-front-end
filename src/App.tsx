import { useState, useEffect } from "react";
import "./App.scss";
import SearchBar from "./components/searchBar/block";
import ListFilms from "./components/listFilms/block";
import { FilmContent, FilmAPI } from "./types/films";

function App() {
  const [films, setFilms] = useState<FilmContent[]>();
  const [filmsDiscovered, setFilmsDiscovered] = useState<number[]>();

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=fr&page=1&api_key=f87eb78b511a28b0ddbe1baf331bd136`,
          { method: "GET" }
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        setFilms(result.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getFilms();
  }, []);

  return (
    <div className="appContainer">
      <div className="intro">
        <h1>Trouvez tous les films</h1>
        <p>
          Vous avez trouvé {filmsDiscovered ? filmsDiscovered.length : 0} films
          sur {films ? films.length : 0}
        </p>
      </div>
      <SearchBar
        filmsDiscovered={filmsDiscovered}
        setFilmsDiscovered={setFilmsDiscovered}
        films={films}
      />

      <ListFilms films={films} filmsDiscovered={filmsDiscovered} />
    </div>
  );
}

export default App;
