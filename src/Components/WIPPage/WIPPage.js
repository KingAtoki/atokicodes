import React, { Component } from 'react'
import { secretPassword } from '../../../src/secret';

export default class WIPPage extends Component {

    state = {
        password: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
  render() {
    return (
      <div>
        <h1>Sorry this Amazing Site is still being finished up!</h1>
        <h3>Unless of course you are Chris Atoki himself, then you should be able to pass the test below.</h3>
        <input name='password' value={this.state.password} onChange={this.handleChange}/>
        <button onClick={() => this.props.checkPassword(this.state.password, secretPassword)}>{"I knew the answer."}</button>
      </div>
    )
  }
}
