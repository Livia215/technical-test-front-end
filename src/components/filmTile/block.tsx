import { FC } from "react";
import { FilmContent } from "../../types/films";

import style from "./block.module.scss";

const FilmTile: FC<{ content: FilmContent }> = ({ content }) => {
  return (
    <div className={style.filmTileContainer}>
      <img
        src={content.poster}
        alt="Image du film"
        className={style.filmTilePoster}
      />
      <p>{content.title}</p>
    </div>
  );
};

export default FilmTile;
