import React, { Component } from 'react';

export default class Company extends Component {
  render() {
    return (
      <div>
        Welcome to {this.props.match.params.name} Co.
      </div>
    );
  }
}