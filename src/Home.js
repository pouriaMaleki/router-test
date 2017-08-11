import React, { Component } from 'react';
import User from './User';
import Company from './Company';
import Form from './Form';
import { Route, Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3> This is home header. </h3>
          <Route exact path={this.props.match.path} component={Form} />
          <Route path={`${this.props.match.path}/user/:name?`} component={User} />
          <Route path={`${this.props.match.path}/company/:name`} component={Company} />
      </div>
    );
  }
}