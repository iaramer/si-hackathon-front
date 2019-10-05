import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getMaterials } from "../../containers/requires";
import descriptionLogo from './courses.png' 
import Materials from '../material/material.component';
import "./info-page.scss";

class InfoPageRender extends Component {
  
  state = {
    materials: []
  }

  getMaterials = id => {
		getMaterials(id).then(data => {
			console.log(data);
			
			this.setState({
				materials: data
			});
		});
  };
  
  render() {
    const { id, errors, title, body } = this.props 
    

    return (
      <div className="workspace__start">
        <div className="infopage">
          <div className="infopage__leftside"> 
            <img src={descriptionLogo} className="logo" alt='logo'/>
          </div>
          <div className="infopage__rightside"> 
            <h2 className="infopage__rightside-title">{title}</h2>
            <span>{body}</span>
          </div>
        </div>

        <div className="button_container">
          
          <button
            className="start_button exam"
            onClick={()=> this.getMaterials(id)}>
              Learn
          </button>

          <button 
            className="start_button assesment"
            onClick={()=> getMaterials(id)}>
              Pass exam
          </button>

        </div>

        <div className="infopage-description">
            <Materials id = {id} />
            {this.state.materials.map((e)=>console.log(e))}
        </div>
      </div>
    );
  }
}

export default InfoPageRender;