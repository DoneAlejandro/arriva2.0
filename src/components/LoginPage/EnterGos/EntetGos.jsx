import React from "react";
import styleOfEnterGos from "../EnterGos/EnterGos.module.scss";
import { NavLink } from "react-router-dom";

const EntetGos = () => {
  return (
    <div className={styleOfEnterGos.EntetGosBox}>
      <NavLink to="/entergospage">
        <div className={styleOfEnterGos.link}>
          ВХОД ЧЕРЕЗ
          <img
            src="https://raw.githubusercontent.com/yvlavrov/Adaptive_site/687b5482f3cfda070b3f93e2bd6b32962b265824/img/Gosuslugi_logo.svg"
            alt="ГОСУСЛУГИ"
          />
        </div>
      </NavLink>
    </div>
  );
};

export default EntetGos;
