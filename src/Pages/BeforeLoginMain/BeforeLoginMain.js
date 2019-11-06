import React, { Component } from "react";
import BeforeLoginNav from "components/BeforeLoginMain/BeforeLoginNav";
import MainVideo from "components/BeforeLoginMain/MainVideo";
import HashTag from "components/BeforeLoginMain/HashTag";
import Feeds from "components/BeforeLoginMain/Feeds";
import Footer from "components/BeforeLoginMain/Footer";

class BeforeLoginMain extends Component {
  render() {
    return (
      <>
        <BeforeLoginNav />
        <MainVideo />
        <HashTag />
        <Feeds />
        <Footer />
      </>
    );
  }
}

export default BeforeLoginMain;
