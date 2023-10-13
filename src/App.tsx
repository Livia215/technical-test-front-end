import { useState } from "react";
import "./App.css";

interface IAPIOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

function App() {
  const [films, setFilms] = useState<Object[]>([]);

  const options: IAPIOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODdlYjc4YjUxMWEyOGIwZGRiZTFiYWYzMzFiZDEzNiIsInN1YiI6IjY1MjkzODQ3NTQ0YzQxMGRkNTMwYTJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPRGDpWCdj9c2YXX4JXee0Udb6IAxw6zqofS9DmXmII",
    },
  };

  async function getFilms() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1&key=f87eb78b511a28b0ddbe1baf331bd136",
        options
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setFilms((e) => [...e, result.results]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getFilms();

  // console.log(films);

  return (
    <>
      <div>
        <h1>Trouve les films et gagne une joie indescriptible</h1>
      </div>
    </>
  );
}

export default App;
