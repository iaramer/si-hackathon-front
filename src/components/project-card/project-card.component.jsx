import * as React from "react";

import "./project-card.scss";

export const ProjectCard = props => {
  const { key, name, body } = props;

  return (
    <div className="card" key={key}>
      <div className="name_container">
        <span className="name"> {name}</span>
      </div>
      {body}
    </div>
  );
};
