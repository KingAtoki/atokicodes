import React, { Component } from 'react';
import axios from 'axios';

import delay from 'delay';

export default class JokeComp extends Component {
  state = {
    setup: '',
    punchline: ''
  };

  componentDidMount() {
    axios
      .get(
        'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
      )
      .then(async res => {
        const setup = res.data.setup;
        const punchline = res.data.punchline;
        await this.setState({ setup });
        await delay(5000);
        await this.setState({ punchline });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h2>{this.state.setup || 'Let me think of one...'}</h2>
        <h3>{this.state.punchline || null}</h3>
      </div>
    );
  }
}
