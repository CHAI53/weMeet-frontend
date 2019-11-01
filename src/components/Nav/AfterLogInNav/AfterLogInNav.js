import React from "react";
import NavLogo from "../NavLogo";
import NavRight from "../AfterLoginNavRight";
import "./AfterLogInNav.scss";

function AfterLogInNav() {
  return (
    <header className="nav">
      <div className="nav-align">
        <NavLogo />
        <NavRight />
      </div>
    </header>
  );
}

export default AfterLogInNav;
