import React, { useEffect, useState } from "react";
import scss from "./SortPopular.module.scss";
import vector from "../../../img/Vector.svg";

export const SortPopular = () => {
  let test = localStorage.getItem("list");
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(test || 0);

  const clickOnSelect = (i) => {
    setSelect(i);
    setOpen();
    
    let json = JSON.stringify(i);
    localStorage.setItem("list", json);
  };

  const list = ["по популярности", "по цене", "по алфавиту"];

  return (
    <>
      <div className={scss.popular}>
        <img src={vector} alt="" />
        <p>Сортировка по:</p>
        <span onClick={() => setOpen(!open)}>{list[0 || select]}</span>
      </div>
      {open && (
        <div className={scss.modal}>
          {list.map((name, i) => (
            <p
              key={i}
              onClick={() => clickOnSelect(i)}
              className={+select == i ? scss.active : ""}
            >
              {name}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
