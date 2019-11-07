import React, { Component } from "react";
import "./Discussion.scss";

export class Discussion extends Component {
  render() {
    return (
      <div className="discussion">
        <div className="discussion-in">
          <div className="discussion-menu">
            <div className="discussion-title">
              <h3>
                <span></span>
              </h3>
            </div>
            <div className="discussion-see-all">
              <a className="see-all-in" href="true">
                see_all
              </a>
            </div>
            <div className="discussion-contents">
              <div className="discussion-input">
                <div className="discussion-input-in">
                  <div className="input-profile">
                    <span className="input-profile-in">
                      <img className="my-profile-img" alt=""></img>
                    </span>
                  </div>
                  <div className="input-text">
                    <div className="input-text-in">
                      <textarea className="text-in-value"></textarea>
                      <p className="text-in-count"></p>
                    </div>
                  </div>
                  <div className="input-btn">
                    <button className="input-btn-in">
                      <svg className="input-btn-img"></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="discussion-output">
                <ul className="discussion-list">
                  <li className="single-discussion">
                    <div className="single-discussion-in">
                      <div className="single-discussion-top">
                        <div className="single-discussion-top-in">
                          <div className="single-discussion-top-profile"></div>
                          <div className="single-discussion-top-name"></div>
                          <div className="single-discussion-top-date"></div>
                          <div className="single-discussion-top-menu"></div>
                        </div>
                      </div>
                      <div className="single-discussion-middle">
                        <p className="single-discussion-value"></p>
                      </div>
                      <div className="single-discussion-bottom">
                        <div className="single-discussion-bottom-in">
                          <div className="discussion-bottom-left">
                            <div className="count-reply"></div>
                            <div className="reply"></div>
                          </div>
                          <div className="discussion-bottom-right">
                            <button className="like-count"></button>
                            <button className="like-toggle">
                              <span className="like-toggle-heart"></span>
                              <span className="like-toggle-text"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discussion;
