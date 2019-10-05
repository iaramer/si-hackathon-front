import * as React from "react";

import { getQuestion, postAnswer } from "../requires";
import "./question.scss";

export class Question extends React.Component {
  state = {
    questions: [],
    answers: []
  };

  getQuestion = () => {
    getQuestion(this.props.match.params.id).then(data => {
      this.setState({
        questions: data
      });
    });
  };

  postAnswer = body => {
    postAnswer(this.props.match.params.id, body).then(data => {
      console.log(data);
      this.setState({
        answers: data
      });
    });
  };

  componentDidMount() {
    console.log(this.props);

    this.getQuestion();
  }
  componentWillUpdate(prevProps, prevState) {
    if (prevState.answers !== this.state.answers) {
      console.log(this.state.answers);
    }
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
        <div>
          {this.state.answers.map(answer => {
            return (
              <div key={answer.questionId} className='resultBlock'>
                <h3>{answer.questionId}</h3>
                <span>Percent of correct answer {answer.mark}%</span>
                <span>Response rating {answer.markText}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  setAnswer = e => {
    console.log(document.getElementById(1).value);
    const answer = [];
    answer.push({ id: 1, answer: document.getElementById(1).value });

    console.log(answer);
    const body = {
      answers: [
        {
          answer: "ghh",
          questionId: "2"
        },
        {
          answer: "ghh",
          questionId: "2"
        }
      ],
      studentName: "Mike"
    };
    this.postAnswer(body);
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
