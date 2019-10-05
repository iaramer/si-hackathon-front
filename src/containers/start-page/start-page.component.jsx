import * as React from "react";
import { getLanguages } from "../requires";
import { Link } from "react-router-dom";
import "./start-page.scss";
import { ProjectCard } from "../../components/project-card/project-card.component";

export class StartPage extends React.PureComponent {
	state = {
		languages: [],
		examId: '',
	};

	componentDidMount() {
		//this.getEveningCourses();
	}

	getLanguages = type => {
		getLanguages(type).then(data => {
			console.log(data);
			
			this.setState({
				languages: data,
				examId: type
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
							onClick={() => this.getLanguages(1)}
						>
							Evening courses
            			</button>

						<button
							className="start_button exam"
							onClick={() => this.getLanguages(2)}
						>
							Lectures exam
            			</button>

						<button
							className="start_button assesment"
							onClick={() => this.getLanguages(3)}
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

	get exams() {
		return this.state.languages.map(language => 
				<Link to={`/language:${language.id}/topics:${this.state.examId}`} key={language.id}>
					<ProjectCard
						key={language.id}
						name={language.name}
						body={language.description}
					/>
				</Link>
		)
	}

	get noLanguages() {
		return <span> No language available </span>;
	}
}
