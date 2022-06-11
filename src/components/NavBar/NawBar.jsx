import React from "react";
import { NavLink } from "react-router-dom";
import style from "../NavBar/NavBar.module.scss";

const NawBar = () => {
  return (
    <div className={style.nawBar}>
      <div className={style.navItem}>
        <NavLink className={style.navLink} to="/addtask">
          Добавить задачу
        </NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink className={style.navLink} to="/filter">
          Фильтры задач
        </NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink className={style.navLink} to="/profile">
          Профиль
        </NavLink>
      </div>
      <div className={style.navItem}>
        <NavLink className={style.navLink} to="/theme">
          Оформление
        </NavLink>
      </div>
    </div>
  );
};

export default NawBar;
