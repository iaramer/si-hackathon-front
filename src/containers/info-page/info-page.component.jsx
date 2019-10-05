import React, { Component } from 'react';
import InfoPageRender from '../../components/info-render/info-page-render.component';
/* import PokemonInfoRender from '../components/pokemonInfoRender' */

class PageInfo extends Component {

  state = {
    id: this.props.match.params.id,
    errors: ''
  }
  
  loadInfo = () => {
    const { id } = this.state;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
  }

  componentDidMount() {
    this.loadInfo();
  }

  render() {
    return <InfoPageRender {...this.state} />//<PokemonInfoRender {...this.state} />
  }
}

export default PageInfo;