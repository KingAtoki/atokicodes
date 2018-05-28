import React, { Component } from 'react';
import axios from 'axios';

export default class JokeComp extends Component {
  state = {
    joke: ''
  };

  componentDidMount() {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(res => this.setState({ joke: res.data.value }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h2>{this.state.joke || 'Let me think of one...'}</h2>
      </div>
    );
  }
}
