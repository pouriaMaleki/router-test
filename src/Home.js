import React, { Component } from 'react';
import User from './User';
import Company from './Company';
import Form from './Form';
import { Route, Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { nameFormValue: "" };
    this.onChangeNameForm = this.onChangeNameForm.bind(this);
  }

  onChangeNameForm(value) {
    this.setState({ nameFormValue: value })
  }

  render() {
    return (
      <div>
        <h3> This is home header {this.state.nameFormValue}. </h3>
          <Route exact path={this.props.match.path} render={ () => <Form onChange={this.onChangeNameForm} value={this.state.nameFormValue} path={this.props.match.path} />} />
          <Route path={`${this.props.match.path}/user/:name?`} component={User} />
          <Route path={`${this.props.match.path}/company/:name`} component={Company} />
      </div>
    );
  }
}