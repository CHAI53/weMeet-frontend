import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./GroupMainNavbar.scss";

export class GroupMainNavbar extends Component {
  state = {
    admin: true,
    invertedNavbar: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY);
    this.setState({ invertedNavbar: window.scrollY < 493 });
  };

  handleclick = () => {
    const id = this.props.groupId;
    this.props.history.push(`/${id}/event`);
  };

  render() {
    let normal = "group-main-navbar";
    let fixed = "group-main-navbar-fixed";
    return (
      <div className={this.state.invertedNavbar ? normal : fixed}>
        <div className="group-main-navbar-in">
          <div className="main-nav-left">
            <div className="main-nav-left-in">
              <ul className="nav-left-list">
                <li>정보</li>
                <li>이벤트</li>
                <li>사진</li>
                <li>토론</li>
              </ul>
            </div>
          </div>
          <div className="main-nav-right">
            <div className="main-nav-right-in">
              <div className="dropdown-btn">
                <div>회원</div>
                <div className="chevron-down"></div>
              </div>
            </div>
            <div>
              {this.state.admin && (
                <div
                  onClick={this.handleclick}
                  className="main-nav-right-in-event"
                >
                  <div className="master-event-add-btn">
                    <div>일정 등록</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupMainNavbar);
