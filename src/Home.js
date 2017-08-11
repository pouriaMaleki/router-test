import React, { Component } from 'react';
import User from './User';
import Company from './Company';
import { Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3> This is home header. </h3>
         <Route path='/home/user' component={ () => <User name={this.props.name} /> }/> 
         <Route path='/home/company' component={ () => <Company name={this.props.name} /> }/> 
      </div>
    );
  }
}