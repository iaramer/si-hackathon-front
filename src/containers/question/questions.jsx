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
    getQuestion(this.props.match.params.id).then(data => {
      console.log(data);

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

    this.getQuestion();
  }

  render() {
    return (
      <div className="workspace__start">
        <div className="nameBlock">
          <span>Please enter your name</span>
          <textarea />
        </div>
        <h2 className="title">Topic title</h2>
        {this.question}

        <button className="saveButton assesment" onClick={this.setAnswer}>
          save
        </button>
      </div>
    );
  }

  setAnswer = e => {
    console.log(document.getElementById(1).value);
    const answer = [];
    answer.push({ id: 1, answer: document.getElementById(1).value });
    console.log(answer);
  };

  get question() {
    return this.state.questions.map(qes => {
      return (
        <div className="questionBlock" key={qes.id}>
          <span>{qes.questionText}</span>
          <textarea
            id={qes.id}
            rows={5}
            name="answer"
            placeholder="Write your answer"
          />
        </div>
      );
    });
  }
}
