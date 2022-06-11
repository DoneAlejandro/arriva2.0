import Registration from "./Registration/Registration";
import React from "react";
import Enter from "./Enter/Enter";
import EntetGos from "./EnterGos/EntetGos";
import styleOfLoginPage from "../LoginPage/LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styleOfLoginPage.loginBox}>
      <div className={styleOfLoginPage.loginList}>
        <div>
          <Registration />
        </div>
        <div>
          <Enter />
        </div>
        <div>
          <EntetGos />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
