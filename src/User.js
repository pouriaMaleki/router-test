import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        Hello {this.props.match.params.name}
      </div>
    );
  }
}