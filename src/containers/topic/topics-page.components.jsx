import * as React from "react";

import { ProjectCard } from "../../components/project-card/project-card.component";

export class TopicsPage extends React.PureComponent {
  // constructor(p) {
  // 	super(p);

  // 	p.getProjects();
  // }

  render() {
    return (
      <div className="workspace__start">
        <span className="discription">Select topic</span>
        <div className="containerCard">
          {/* <Link to={'/post/' + id}> */}
          <ProjectCard />
          {/* </Link> */}
          {/* {this.props.language ? this.topic : this.noTopic} */}
        </div>
      </div>
    );
  }

  get noTopic() {
    return <span>No topic available</span>;
  }
}
