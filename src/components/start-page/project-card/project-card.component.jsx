import * as React from "react";
import { Link } from "react-router-dom";

import "./project-card.scss";

export const ProjectCard = props => {
  // const { name, id } = props.project;

  return (
    <div className="card">
      {/* <Link to={'/post/' + id}> */}
      <div className="name_container">
        <span className="name"> JS</span>
      </div>
      description
      {/* </Link> */}
    </div>
  );
};
