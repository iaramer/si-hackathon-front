import * as React from "react";

import { getQuestion, postAnswer } from "../requires";
import "./question.scss";

export class Question extends React.Component {
  state = {
    name: '',
    questions: [],
    answers: []
  };

  /* constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } */

  getQuestion = () => {
    getQuestion(this.props.match.params.id).then(data => {
      this.setState({
        questions: data
      });
    });
  };

  postAnswer = (body) => {
    postAnswer(body).then(data => {
      console.log(data)
      this.setState({
        answers: data
      });
    });
  };

  componentDidMount() {
    //console.log(this.props);

    this.getQuestion();
  }
  componentWillUpdate(prevProps, prevState) {
    if (prevState.answers !== this.state.answers) {
      console.log(this.state.answers);
    }
  }

  handleChange = (event) =>
    this.setState({name: event.target.value});
  

  handleSubmit = (event) => {
    console.log('Отправленное имя: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="workspace__start">
          <div className="nameBlock">
            <span>Please enter your name</span>
            <textarea
              id={`name`}
              rows={5}
              name="answer"
              placeholder="Write your answer"
            />
          </div>

        <div>
          {this.state.answers.length ? 
            this.state.answers.map(answer => {
            return (
              <div key={answer.questionId} className='resultBlock'>
                <h3>{answer.questionId}</h3>
                <span>Percent of correct answer {answer.mark}%</span>
                <span>Response rating {answer.markText}</span>
              </div>
            );
          }) : null}
        </div>
          <h2 className="title">Topic title</h2>
            {this.question}

           <button className="saveButton assesment" onClick={this.setAnswer}>
              save
          </button> 
          </div>
    );
  }

  setAnswer = () => {
    const textareaList = document.querySelectorAll("textarea");
    const mass = [...textareaList];
    const answer = [];
    const body = {};


    mass.map((e)=> {
      console.log(e.id, e.value)  
      e.id === 'name' ? 
        body.studentName = e.value :
      answer.push({ answer: e.value, questionId: e.id })
      body.answers = answer;
    
    })  
    console.log(body)
    this.postAnswer(body)
  }

  get question() {
    return this.state.questions.map(qes => {
      console.log(qes)
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
