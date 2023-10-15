import { FC, useEffect, useState } from "react";
import { FilmContent } from "../../types/films";
import style from "./block.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";

const PopupFilm: FC<{ selectedFilm: number; setSelectedFilm: Function }> = ({
  selectedFilm,
  setSelectedFilm,
}) => {
  const [filmContent, setFilmContent] = useState<FilmContent>();

  useEffect(() => {
    async function getFilmContent() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedFilm}?api_key=f87eb78b511a28b0ddbe1baf331bd136`,
          { method: "GET" }
        );

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        setFilmContent(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getFilmContent();
  }, [selectedFilm]);

  return (
    <div className={style.popupBackground}>
      <div className={style.popupFilmContainer}>
        {filmContent && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original/${filmContent.poster_path}`}
              alt={filmContent.title}
              className={style.popupFilmImage}
            />
            <div className={style.popupContent}>
              <p className={style.title}>{filmContent.title}</p>
              <div className={style.genres}>
                <p>
                  <strong>Genre(s)</strong>:{" "}
                </p>
                {filmContent.genres.map(
                  (genre: { id: number; name: string }) => {
                    return <p key={genre.id}>{genre.name}</p>;
                  }
                )}
              </div>
              <p className={style.date}>
                <strong>Date de sortie</strong>: {filmContent.release_date}
              </p>
              <p className={style.overview}>
                <strong>Description</strong>: {filmContent.overview}
              </p>
            </div>
          </>
        )}
        <CancelIcon
          className={style.closeIcon}
          onClick={() => setSelectedFilm(null)}
        />
      </div>
    </div>
  );
};

export default PopupFilm;
