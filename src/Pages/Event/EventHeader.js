import React from "react";
import Date from "components/Event/Date";
import Title from "components/Event/Title";
import Action from "components/Event/Title/Action";

export default function EventHeader(props) {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Date date={props.date} />
        <Title
          status={props.date}
          title={props.title}
          hostInfo={props.hostInfo}
          node={props.node}
        />
        <Action
          status={props.date}
          limitUser={props.limitUser}
          attendeesCount={props.attendeesCount}
          attendStatus={props.attendStatus}
          eventId={props.id}
        />
      </div>
    </div>
  );
}
