import React, { Component } from "react";
import "./Myprofile.scss";
import AfterLogInNav from "../../components/Nav/AfterLogInNav/AfterLogInNav";
import About from "./About";
import Interest from "./Interest";

class Myprofile extends Component {
  render() {
    return (
      <>
        <AfterLogInNav />
        <div className="myprofile-wrapper">
          <About />
          <div className="int-wrapper">
            <Interest />
          </div>
        </div>
      </>
    );
  }
}
export default Myprofile;
