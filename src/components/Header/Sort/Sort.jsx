import React, { useState } from "react";
import "./Sort.scss";
import style from "../index.module.scss";
import { SortPopular } from "./SortPopular/SortPopular";
// import { useStyle } from "./useStyle";

export const Sort = () => {
  const storedCategory = localStorage.getItem("category");
  const [type, setType] = useState(storedCategory || "all");

  const clickType = (id) => {
    setType(id);
    let test = JSON.stringify(id);
    localStorage.setItem("category", test);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <header>
      <ul>
        {categories.map((value, id) => {
          return (
            <li
              key={id}
              onClick={() => clickType(id)}
              className={+type === id ? "active_button" : style.li}
            >
              {value}
            </li>
          );
        })}
      </ul>
      <SortPopular />
    </header>
  );
};
