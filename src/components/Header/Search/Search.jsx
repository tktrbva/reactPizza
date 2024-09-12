import React from "react";
import style from "./Search.module.scss";

const Search = ({ search, setSearch }) => {
  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};
export default Search;
