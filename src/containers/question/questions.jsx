import * as React from "react";
import { Link } from "react-router-dom";

import { getQuestion } from "../requires";
import "./question.scss";

export class Question extends React.PureComponent {
  state = {
    questions: [],
    answer: []
  };

  getQuestion = () => {
    getQuestion().then(data => {
      this.setState({
        questions: data
      });
    });
  };

  // postAnswer = (body) => {
  //   getQuestion(body).then(data => {
  //     this.setState({
  //       answer: data
  //     });
  //   });
  // };

  componentDidMount() {
    console.log(this.props);

    // this.getQuestion(topicId);
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
          <textarea
            id={1}
            rows={5}
            name="answer"
            placeholder="Write your answer"
          />
        </div>
        <div className="questionBlock">
          <span>question</span>
          <textarea
            id={2}
            rows={5}
            name="answer"
            placeholder="Write your answer"
          />
          <button className="saveButton assesment" onClick={this.setAnswer}>
            save{" "}
          </button>
        </div>
      </div>
    );
  }

  setAnswer = e => {
    console.log(document.getElementById(1).value);
    const answer = [];
    answer.push({ id: 1, answer: document.getElementById(1).value });
    console.log(answer);
  };
}
