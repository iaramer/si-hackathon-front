import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMaterials } from "../../containers/requires";
import descriptionLogo from "./courses.png";
import Materials from "../material/material.component";
import "./info-page.scss";

class InfoPageRender extends Component {
  state = {
    materials: []
  };

  getMaterials = id => {
    getMaterials(id).then(data => {
      console.log(data, data[1], data[1].materialLinks[0]);

      this.setState({
        materials: data,
        matTitle: data[0].discription,
        matLink: data[0].materialLinks[0]
        
      });
    });
  };

  render() {
    const { id, errors, title, body } = this.props;
    const { materials } = this.state;

    return (
      <div className="workspace__start">
        <div className="infopage">
          <div className="infopage__leftside">
            <img src={descriptionLogo} className="logo" alt="logo" />
          </div>
          <div className="infopage__rightside">
            <h2 className="infopage__rightside-title">{title}</h2>
            <span>{body}</span>
          </div>
        </div>

        <div className="button_container">
          <button
            className="start_button exam"
            onClick={() => this.getMaterials(id)}
          >
            Learn
          </button>

          <Link to={`/topic/${id}/question`}>
            <button className="start_button assesment">Exams</button>
          </Link>
        </div>

        <div className="infopage-description">
          {materials.length ? <Materials materials={materials} matLink={this.state.matLink} /> : null}
        </div>
      </div>
    );
  }

  /* get material() {
		return this.state.languages.map(language => 
				<Link to={`/language:${language.id}/topics:${this.state.examId}`} key={language.id}>
					<ProjectCard
						key={language.id}
						name={language.languageType}
						body={language.description}
					/>
				</Link>
		)
	} */
}

export default InfoPageRender;
