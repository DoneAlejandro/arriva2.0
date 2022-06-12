import React from "react";
import styleOfEnterPage from "../EnterPage/EnterPage.module.scss";
import { NavLink } from "react-router-dom";

const EnterPage = () => {
  return (
    <div className={styleOfEnterPage.pageBox}>
      <div className={styleOfEnterPage.areaBox}>
        <div className={styleOfEnterPage.areaItem}>
          <input
            type="tel"
            name="phone"
            placeholder="+7(000)000-00-00"
            className={styleOfEnterPage.areaNumber}
          />
        </div>
        <div className={styleOfEnterPage.areaItem}>
          <input
            type="number"
            placeholder="Код из смс"
            className={styleOfEnterPage.areaCode}
          />
        </div>
      </div>
      <div className={styleOfEnterPage.areaBtnBox}>
        <NavLink className={styleOfEnterPage.areaBtn} to="/mainpage">
          Далее
        </NavLink>
      </div>
    </div>
  );
};

export default EnterPage;
