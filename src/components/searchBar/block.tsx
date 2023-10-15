import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./block.module.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className={style.searchBarContainer}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={style.input}
        placeholder="Entrez un nom de film"
      />
      <SearchIcon sx={{ color: style.grey }} className={style.icon} />
    </form>
  );
};

export default SearchBar;
