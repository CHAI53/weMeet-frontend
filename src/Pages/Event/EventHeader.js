import React from "react";
import Date from "components/Event/Date";
import Title from "components/Event/Title";
import Action from "components/Event/Title/Action";

export default function EventHeader() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Date />
        <Title />
        <Action />
      </div>
    </div>
  );
}
