import React from "react";
import styleOfRegistration from "../Registration/Registration.module.scss";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className={styleOfRegistration.registrationBox}>
      <NavLink to="/registrationpage" className={styleOfRegistration.link}>
        РЕГИСТРАЦИЯ
      </NavLink>
    </div>
  );
};

export default Registration;
