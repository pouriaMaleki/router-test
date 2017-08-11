import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  render() {
    return (
      <div>
        Name or Title <input onChange={ (event) => this.setState({ inputValue: event.target.value }) } value={this.state.inputValue} />
        <div>
          <Link to={`/home/user/${this.state.inputValue}`} > As User </Link>
        </div>
        <div>
          <Link to={`/home/company/${this.state.inputValue}`} > As Company </Link>
        </div>
      </div>
    );
  }
}