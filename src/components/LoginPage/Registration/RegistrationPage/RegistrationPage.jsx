import React from "react";
import styleOfRegistrationPage from "../RegistrationPage/RegistrationPage.module.scss";
import { NavLink } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className={styleOfRegistrationPage.pageBox}>
      <div className={styleOfRegistrationPage.areaBox}>
        <div className={styleOfRegistrationPage.areaItem}>
          <input
            type="text"
            name="name"
            placeholder="ФИО"
            className={styleOfRegistrationPage.areaName}
          />
        </div>
        <div className={styleOfRegistrationPage.areaItem}>
          <input
            type="tel"
            name="phone"
            placeholder="+7(000)000-00-00"
            className={styleOfRegistrationPage.areaNumber}
          />
        </div>
        <div className={styleOfRegistrationPage.areaItem}>
          <input
            type="number"
            placeholder="Код из смс"
            className={styleOfRegistrationPage.areaCode}
          />
        </div>
      </div>
      <div className={styleOfRegistrationPage.areaBtnBox}>
        <NavLink className={styleOfRegistrationPage.areaBtn} to="/mainpage">
          Далее
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationPage;
