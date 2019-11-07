import React, { Component } from "react";
import "./FindNavbar.scss";
import DropdownMenu from "components/AfterLoginMain/DropdownMenu";

export class FindNavbar extends Component {
  constructor() {
    super();
    this.state = {
      invertedNavbar: true,
      invertedDropdown: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleDropdown = () => {
    if (this.state.invertedDropdown === false) {
      this.setState({ invertedDropdown: true });
    } else {
      this.setState({ invertedDropdown: false });
    }
  };

  handleScroll = () => {
    // const currentScrollY = window.scrollY;
    // if (currentScrollY >= 212) {
    //   this.setState({ invertedNavbar: false });
    // } else {
    //   this.setState({ invertedNavbar: true });
    // }
    this.setState({ invertedNavbar: window.scrollY < 212 });
  };

  render() {
    let normal = "find-navbar-wrap";
    let fixed = "find-navbar-wrap-fixed";
    let focus = "dropdown-menu-focus";
    let blur = "dropdown-menu-blur";
    return (
      <div className={this.state.invertedNavbar ? normal : fixed}>
        <div className="find-navbar">
          <div className="find-navbar-left">
            <div className="left-form">
              <div className="dropdown-bar">
                <input
                  className="input-dropdown"
                  onClick={this.toggleDropdown}
                  placeholder="검색"
                ></input>
                <DropdownMenu
                  className={this.state.invertedDropdown ? focus : blur}
                />
              </div>
              <div>반경</div>
              <div className="dropdown-center">5km</div>
              <div>지역:</div>
              <div className="dropdown-location">서울, KR</div>
            </div>
          </div>
          <div className="find-navbar-right">
            <ul className="view-selector">
              <li className="view-selector-group">
                <span className="view-selector-group-anc">그룹</span>
              </li>
              <li className="view-selector-calendar">
                <span className="view-selector-calendar-anc">캘린더</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FindNavbar;
