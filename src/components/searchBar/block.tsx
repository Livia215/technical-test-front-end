import { useState, FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./block.module.scss";
import { FilmContent } from "../../types/films";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const SearchBar: FC<{
  setFilmsDiscovered: Function;
  films: FilmContent[] | undefined;
  filmsDiscovered: number[] | undefined;
}> = ({ setFilmsDiscovered, films, filmsDiscovered }) => {
  const [searchValue, setSearchValue] = useState("");
  const [alert, setAlert] = useState({ message: "", severity: 0 });

  const normalizeAndLowerCase = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (films) {
      const found = films.find(
        (value) =>
          normalizeAndLowerCase(value.title) ===
          normalizeAndLowerCase(searchValue)
      );
      if (found) {
        if (filmsDiscovered && !filmsDiscovered.includes(found.id)) {
          setFilmsDiscovered([...filmsDiscovered, found.id]);
          setAlert({ message: "Bien joué !", severity: 0 });
        }
        if (!filmsDiscovered) {
          setFilmsDiscovered([found.id]);
          setAlert({ message: "Bien joué !", severity: 0 });
        }
        if (filmsDiscovered && filmsDiscovered.includes(found.id)) {
          setAlert({
            message: "Vous avez déjà trouvez ce film, continuez de chercher",
            severity: 1,
          });
        }
      } else {
        setAlert({
          message: "Cherchez encore, vous n'êtes surement pas loin",
          severity: 2,
        });
      }
      setSearchValue("");
    }
  };

  return (
    <div className={style.searchBarContainer}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={style.input}
          placeholder="Devinez les films à l'affiche"
        />
        <SearchIcon sx={{ color: style.grey }} className={style.icon} />
      </form>
      {alert && alert.message && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            severity={
              alert.severity === 0
                ? "success"
                : alert.severity === 1
                ? "info"
                : "warning"
            }
          >
            {alert.message}
          </Alert>
        </Stack>
      )}
    </div>
  );
};

export default SearchBar;
