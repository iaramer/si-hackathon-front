import * as React from 'react';
import { getEveningCourses, getLectureExams, getAssesment } from '../requires'


import "./start-page.scss";
import { ProjectCard } from "../../components/project-card/project-card.component";

export class StartPage extends React.PureComponent {

	state = {
		examsType: [],
	}

	componentDidMount() {
		//this.getEveningCourses();
	}

	getEveningCourses = () => {
		getEveningCourses().then(data => {
			this.setState({
				examsType: data
			})
		})
	}

	getLectureExams = () => {
		getLectureExams().then(data => {
			this.setState({
				examsType: data
			})
		})
	}

	getAssesment = () => {
		getAssesment().then(data => {
			this.setState({
				examsType: data
			})
		})
	}

	render() {
		const { examsType } = this.state;
		return (
			<div className='workspace__start'>
				<div className='first-block'>
					<span>Select what type you want to check</span>
					<div className='button_container'>
						<button
							className='start_button evening'
							onClick={this.getEveningCourses}>
								Evening courses
						</button>

						<button
							className='start_button exam'
							onClick={this.getLectureExams}>
								Lectures exam
						</button>

						<button
							className='start_button assesment'
							onClick={this.getAssesment}>
								Assesment
							</button>

					</div>
				</div>
				<div className='containerCard'>

					{examsType.length ? this.exams : this.noLanguages}
				</div>
			</div>
		);
	}

	get noLanguages() {
		return <span>No language available</span>;
	}
	get exams() {
		return (
			/* <Link to={'/topic/' + id}> */
			this.state.examsType.map((e) =>
				<ProjectCard key={e.id} />
			)
			/* </Link> */
		);
	}
}
