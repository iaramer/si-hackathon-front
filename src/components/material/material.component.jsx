/* Class, which renders pokemon info page. */
import React, { Component } from 'react';


/* import { Button, Container, Row } from 'reactstrap' */
import "./material.scss";

//import NotFound from './NotFound/NotFound';

class Materials extends Component {
  render() {
    const { materials } = this.props;
    console.log(materials[0].description)
    return ( 
      <div className = "material">
        <h1 className="material-text"> {materials[0].description} </h1> 
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas sunt praesentium incidunt laborum omnis voluptatum 
          molestiae animi velit harum. Sequi repudiandae corrupti culpa
          nesciunt, esse eligendi voluptate a expedita quam.
        </span>
      </div>
    )
  }
}

export default Materials;