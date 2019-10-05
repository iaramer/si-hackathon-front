import * as React from "react";
import { Link } from "react-router-dom";

import "./question.scss";

export class Question extends React.PureComponent {
  state = {
    topics: []
  };

  //   getTopic = () => {
  //     getTopic().then(data => {
  //       this.setState({
  //         topics: data
  //       });
  //     });
  //   };

  componentDidMount() {
    console.log(this.props);

    // this.getQuestion(examId, langId);
  }

  render() {
    return (
      <div className="workspace__start">
        <div className="nameBlock">
          <span>Please enter your name</span>
          <textarea />
        </div>
        <h2 className="title">Topic title</h2>
        <div className="questionBlock">
          <span>question</span>
          <textarea />
        </div>
        <div className="questionBlock">
          <span>question</span>
          <textarea
            rows={5}
            name="answer"
            placeholder="Write your answer"
            // value={textLabel || ''}
            // onChange={this.setAnswer}
          />
          <button className="saveButton assesment">save </button>
        </div>
      </div>
    );
  }

  //   get topic() {

  //   }
}
