import React from "react";

export default function EventButtons() {
  return (
    <div className="buttons">
      <button>
        <span className="accept" />
      </button>
      <button>
        <span className="refuse" />
      </button>
      <div>
        <span className="favorite" />
      </div>
    </div>
  );
}
