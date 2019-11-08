import React, { Component } from "react";

class EventButtons extends Component {
  state = {
    accept: false,
    refuse: false
  };

  handleClick = e => {
    if (e.target.name === "accept") {
      this.setState({ accept: true, refuse: false });
    } else {
      this.setState({ accept: false, refuse: true });
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

export default EventButtons;
