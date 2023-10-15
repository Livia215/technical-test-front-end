import { FC } from "react";
import { FilmContent } from "../../types/films";
import clsx from "clsx";
import style from "./block.module.scss";

const FilmTile: FC<{ content: FilmContent; show: boolean }> = ({
  content,
  show,
}) => {
  const hideTitle = (title: string) => {
    return title.replace(/[a-zA-Z0-9.!?,:;'"_-]/g, "*");
  };

  console.log(content.title);

  return (
    <div className={style.filmTileContainer}>
      <img
        src={content.poster}
        alt="Image du film"
        className={clsx(style.filmTilePoster, show && style.notBlurred)}
      />
      <p>{show ? content.title : hideTitle(content.title)}</p>
    </div>
  );
};

export default FilmTile;
