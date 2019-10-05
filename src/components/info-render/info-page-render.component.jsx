/* Class, which renders pokemon info page. */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
/* import { Button, Container, Row } from 'reactstrap' */

import "./info-page.scss";
import descriptionLogo from './courses.png' 

//import NotFound from './NotFound/NotFound';

class InfoPageRender extends Component {
 
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
          <button className="start_button exam">Learn</button>
          <button className="start_button assesment">Pass exam</button>
        </div>
        <div className="discription">
          ffsdfsdfdsffsdfsdf
        </div>
      </div>
    );
  }
}

export default InfoPageRender;