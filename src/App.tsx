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
          `https://api.themoviedb.org/3/movie/popular?language=en_EN&page=1&api_key=f87eb78b511a28b0ddbe1baf331bd136`,
          { method: "GET" }
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        const returnFilms: FilmContent[] = result.results.map(
          (film: FilmAPI) => {
            return {
              id: film.id,
              title: film.title,
              poster: `https://image.tmdb.org/t/p/original/${film.poster_path}`,
            };
          }
        );
        setFilms(returnFilms);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getFilms();
  }, []);

  return (
    <div className="appContainer">
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
