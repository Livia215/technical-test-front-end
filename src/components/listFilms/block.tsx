import { FC, useState } from "react";
import { FilmContent } from "../../types/films";
import FilmTile from "../filmTile/block";
import clsx from "clsx";
import style from "./block.module.scss";
import PopupFilm from "../popupFilm/block";

const ListFilms: FC<{
  films: FilmContent[] | undefined;
  filmsDiscovered: number[] | undefined;
}> = ({ films, filmsDiscovered }) => {
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);

  return (
    <div className={style.listFilmsContainer}>
      {films &&
        films.length > 0 &&
        films.map((film) => {
          return (
            <div
              key={film.id}
              className={clsx(
                filmsDiscovered &&
                  filmsDiscovered.includes(film.id) &&
                  style.clickable
              )}
              onClick={
                filmsDiscovered && filmsDiscovered.includes(film.id)
                  ? () => setSelectedFilm(film.id)
                  : () => setSelectedFilm(null)
              }
            >
              <FilmTile
                content={film}
                show={
                  filmsDiscovered ? filmsDiscovered.includes(film.id) : false
                }
              />
            </div>
          );
        })}
      {selectedFilm !== null && (
        <PopupFilm
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
        />
      )}
    </div>
  );
};

export default ListFilms;
