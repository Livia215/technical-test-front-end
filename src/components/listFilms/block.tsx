import { FC } from "react";
import { FilmContent } from "../../types/films";
import FilmTile from "../filmTile/block";

import style from "./block.module.scss";

const ListFilms: FC<{ films: FilmContent[] }> = ({ films }) => {
  return (
    <div className={style.listFilmsContainer}>
      {films &&
        films.length > 0 &&
        films.map((film) => {
          return (
            <div key={film.id}>
              <FilmTile content={film} />
            </div>
          );
        })}
    </div>
  );
};

export default ListFilms;
