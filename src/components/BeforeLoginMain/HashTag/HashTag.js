import React, { Component } from "react";
import "./HashTag.scss";
import HashTagButton from "./HashTagButton";
import HashExample from "./HashExample";

class HashTag extends Component {
  render() {
    return (
      <div className="hashtag-large-group">
        <div className="hashtag-small-group">
          {HashExample.example.map(e => (
            <HashTagButton name={e.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default HashTag;
