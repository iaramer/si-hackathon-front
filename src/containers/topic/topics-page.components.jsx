import * as React from "react";
import { Link } from "react-router-dom";

import { ProjectCard } from "../../components/project-card/project-card.component";
import { getTopic } from "../requires";

export class TopicsPage extends React.PureComponent {
  state = {
    topics: []
  };

  getTopic = () => {
    getTopic().then(data => {
      this.setState({
        topics: data
      });
    });
  };

  componentDidMount() {
    this.getTopic();
  }

  render() {
    console.log(this.state.topic);
    return (
      <div className="workspace__start">
        <span className="discription">Select topic</span>
        <div className="containerCard">
          {this.state.topics.length ? this.topic : this.noTopic}
        </div>
      </div>
    );
  }

  get noTopic() {
    return <span>No topic available</span>;
  }

  get topic() {
    debugger;
    return this.state.topics.map(topic => {
      return (
        <Link to={`/topic/${topic.id}`}>
          <ProjectCard key={topic.id} name={topic.title} body={topic.body} />
        </Link>
      );
    });
  }
}
