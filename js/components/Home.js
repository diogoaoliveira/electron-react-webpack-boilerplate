import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello Electron!</h1>
        <Link to="next">Go to next page</Link>
      </div>
    )
  }
}
