/* Class, which renders pokemon info page. */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* import { Button, Container, Row } from 'reactstrap' */
import "./material.scss";

//import NotFound from './NotFound/NotFound';

class Materials extends Component {

  render() {
    console.log(this.props)
    //const { materials } = this.props;
    this.props.materials.data.map((e) => {
      console.log(e)  
    })
    return (
      this.props.materials.data.map((e) => {
      return ( 
        <div className = "material">
          <h1 className="material-text"> {e.description} </h1> 
          <span>
            {e.materialLinks[0]}
          </span>
        </div>
      )
    }))
  }
}

export default Materials;