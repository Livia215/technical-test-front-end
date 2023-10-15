import { FC } from "react";
import { FilmContent } from "../../types/films";
import FilmTile from "../filmTile/block";

import style from "./block.module.scss";

const ListFilms: FC<{
  films: FilmContent[] | undefined;
  filmsDiscovered: number[] | undefined;
}> = ({ films, filmsDiscovered }) => {
  return (
    <div className={style.listFilmsContainer}>
      {films &&
        films.length > 0 &&
        films.map((film) => {
          return (
            <div key={film.id}>
              <FilmTile
                content={film}
                show={
                  filmsDiscovered ? filmsDiscovered.includes(film.id) : false
                }
              />
            </div>
          );
        })}
    </div>
  );
};

export default ListFilms;
