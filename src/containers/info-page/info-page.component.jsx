import React, { Component } from 'react';
import InfoPageRender from '../../components/info-render/info-page-render.component';
/* import PokemonInfoRender from '../components/pokemonInfoRender' */
import {getMaterials} from '../requires'
export class PageInfo extends Component {

  state = {
    id: this.props.match.params.id,
    errors: '',
    data: []
  }
  
 /*  getQuestion = () => {
    getQuestion(this.props.match.params.id).then(data => {
      this.setState({
        questions: data
      });
    });
  }; */
  
  loadInfo = () => {
    getMaterials(this.props.match.params.id).then( response => {
      console.log(response)
      this.setState({
        data: response
      })})
    }
   /*  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then( response => {
      if (!response.ok) { this.setState({errors: response.status}) }
    return response.json()
    })
    .then( result =>       
      this.setState({
        title: result.title,
        body: result.body
      })
    );
  } */

  componentDidMount() {
    this.loadInfo();
  }


  render() {
    console.log(this.state)
    return <InfoPageRender {...this.state} />//<PokemonInfoRender {...this.state} />
  }
}
