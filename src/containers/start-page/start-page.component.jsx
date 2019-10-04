import * as React from 'react';

import  './start-page.scss';
import { ProjectCard } from './project-card/project-card.component';
import Load from '../requires'

export class StartPage extends React.PureComponent {
	// constructor(p) {
	// 	super(p);

	// 	p.getProjects();
	// }

	state = {
		testText: ''
	}

	loadText = Load.testReq.bind(this);

	componentDidMount() {
		this.loadText()
	}

	render() {
		return (
				<div className='workspace__start'>
					<div className='first-block'>
					<span>Select what type you want to check</span>
					<div  className='button_container'>
						<button className='start_button evening'>Evening courses</button>
						<button className='start_button exam'>Lectures exam</button>
						<button className='start_button assesment'>Assesment</button>
						
					</div>
					</div>
					<div className='containerCard'>
						<ProjectCard/>
						<h1> Text: {this.state.testText} </h1>
						{/* {this.props.language ? this.language : this.Nolanguage} */}
					</div>
				</div>
		);
	}


	 get noLanguages() {
		return <span>No language available</span>;
	}
}