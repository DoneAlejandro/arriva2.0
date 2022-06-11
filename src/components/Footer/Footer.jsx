import React from "react";
import { NavLink } from "react-router-dom";
import styleoffooter from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styleoffooter.footer}>
      {/* <div className={styleoffooter.team}>Команда</div>
      <div className={styleoffooter.contact}>Контакты</div> */}
      <div>
        <NavLink className={styleoffooter.team} to="/team">
          Команда
        </NavLink>
      </div>
      <div>
        <NavLink className={styleoffooter.contact} to="/contact">
          Контакты
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
