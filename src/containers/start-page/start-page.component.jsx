import * as React from "react";
import { getLanguages } from "../requires";

import "./start-page.scss";
import { ProjectCard } from "../../components/project-card/project-card.component";

export class StartPage extends React.PureComponent {
  state = {
    languages: []
  };

  componentDidMount() {
    //this.getEveningCourses();
  }

  getLanguages = type => {
    getLanguages(type).then(data => {
      this.setState({
        languages: data
      });
    });
  };

  render() {
    const { languages } = this.state;
    return (
      <div className="workspace__start">
        <div className="first-block">
          <span>Select what type you want to check</span>
          <div className="button_container">
            <button
              className="start_button evening"
              onClick={() => this.getLanguages("Evening")}
            >
              Evening courses
            </button>

            <button
              className="start_button exam"
              onClick={this.getLectureExams}
            >
              Lectures exam
            </button>

            <button
              className="start_button assesment"
              onClick={this.getAssesment}
            >
              Assesment
            </button>
          </div>
        </div>
        <div className="containerCard">
          {languages.length ? this.exams : this.noLanguages}
        </div>
      </div>
    );
  }

  get noLanguages() {
    return <span>No language available</span>;
  }
  get exams() {
    return (
      // /* <Link to={'/topic/' + id}> */
      this.state.languages.map(language => (
        <ProjectCard
          key={language.id}
          name={language.languageType}
          body={language.description}
        />
      ))
      /* </Link> */
    );
  }
}
