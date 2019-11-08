import React, { Component } from "react";
import "./Photos.scss";
import Titlebar from "components/GroupPageUser/Titlebar";

export class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <div className="photos-in">
          <Titlebar titlename="사진(118장)" />
          <div className="photos-contents">
            <div className="photos-contents-in">
              <ul className="photos-contents-list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <span>+112</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
