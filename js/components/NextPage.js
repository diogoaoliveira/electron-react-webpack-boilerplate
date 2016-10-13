import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NextPage extends Component {
  render() {
    return (
      <div>
        <h1>Next Page</h1>
        <Link to="/">Go back</Link>
      </div>
    )
  }
}
