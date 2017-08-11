import React from 'react';
import { Link } from 'react-router-dom';

export default function Form(props) {
  return (
    <div>
      Name or Title <input onChange={ (event) => props.onChange(event.target.value) } value={props.value} />
      <div>
        <Link to={`${props.path}/user/${props.value}`} > As User </Link>
      </div>
      <div>
        <Link to={`${props.path}/company/${props.value}`} > As Company </Link>
      </div>
    </div>
  );
}