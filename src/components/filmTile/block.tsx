import { FC } from "react";
import { FilmContent } from "../../types/films";
import clsx from "clsx";
import style from "./block.module.scss";

const FilmTile: FC<{ content: FilmContent; show: boolean }> = ({
  content,
  show,
}) => {
  const hideTitle = (title: string) => {
    return title.replace(/[a-zA-ZÀ-ÖØ-öø-ÿ0-9]/g, "*"); // Don't include special characters to give the player a minimum of help
  };

  return (
    <div className={style.filmTileContainer}>
      {content.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
          alt="Image du film"
          className={clsx(style.filmTilePoster, show && style.notBlurred)}
        />
      )}
      <p>{show ? content.title : hideTitle(content.title)}</p>
    </div>
  );
};

export default FilmTile;
