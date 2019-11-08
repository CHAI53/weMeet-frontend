import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EventButtons extends Component {
  state = {
    accept: false,
    refuse: false
  };

  handleClick = e => {
    if (e.target.name === "accept") {
      fetch("http://locashost:8000/event/add", {
        method: "post",
        body: {
          message: ""
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "success") {
            this.setState({ accept: true, refuse: false });
          }
        })
        .catch(err => console.log(err));
    }

    if (e.target.name === "refuse") {
      fetch("http://locashost:8000/event/add", {
        method: "post",
        body: {
          message: ""
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "success") {
            this.setState({ accept: false, refuse: true });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { handleClick } = this;
    const { accept, refuse } = this.state;

    return (
      <div className="buttons">
        <button
          className={!accept && "clicked"}
          name="accept"
          onClick={handleClick}
        >
          <span className="accept" />
        </button>
        <button
          className={!refuse && "clicked"}
          name="refuse"
          onClick={handleClick}
        >
          <span className="refuse" />
        </button>
        {/* <div>
          <span className="favorite" />
        </div> */}
      </div>
    );
  }
}

export default withRouter(EventButtons);
