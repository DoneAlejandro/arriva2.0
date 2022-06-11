import React from "react";
import { NavLink } from "react-router-dom";
import styleOfEnter from "../Enter/Enter.module.scss";

const Enter = () => {
  return (
    <div className={styleOfEnter.enterBox}>
      <NavLink to="/enterpage" className={styleOfEnter.link}>
        ВХОД
      </NavLink>
    </div>
  );
};

export default Enter;
