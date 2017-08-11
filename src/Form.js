import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  render() {
    return (
      <div>
        Name or Title <input onChange={ (event) => this.props.onChange(event.target.value) } value={this.props.value} />
        <div>
          <Link to={`/home/user/${this.props.value}`} > As User </Link>
        </div>
        <div>
          <Link to={`/home/company/${this.props.value}`} > As Company </Link>
        </div>
      </div>
    );
  }
}