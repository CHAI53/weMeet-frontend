import React from "react";
import { withRouter } from "react-router-dom";
import "./NavLogo.scss";

function NavLogo(props) {
  const handleClick = () => {
    props.history.push("/after_login_main");
  };
  return (
    <div onClick={handleClick} className="logo">
      <span className="logo-img" />
    </div>
  );
}

export default withRouter(NavLogo);
