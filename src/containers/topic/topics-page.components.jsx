import * as React from "react";
import { Link } from "react-router-dom";

import { ProjectCard } from "../../components/project-card/project-card.component";
import { getTopic } from "../requires";

export class TopicsPage extends React.PureComponent {
  state = {
    topics: []
  };

  getTopic = (examId, langId) => {
    getTopic(examId, langId).then(data => {
      this.setState({
        topics: data
      });
    });
  };

  componentDidMount() {
    console.log(this.props.match.params);

    this.getTopic(
      this.props.match.params.examId,
      this.props.match.params.langId
    );
  }

  render() {
    return (
      <div className="workspace__start">
        <h3 className="discription">Select topic</h3>
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
    return this.state.topics.map(topic => {
      return (
        <Link
          to={`/topic/${topic.id}`}
          key={topic.id}
          name={topic.topicName}
          body={topic.description}
        >
          <ProjectCard
            key={topic.id}
            name={topic.topicName}
            body={topic.description}
          />
        </Link>
      );
    });
  }
}
