import React, { Component } from 'react';
import './Textual.css';

class Textual extends Component {
  render() {
    return (
      <div border="10" className="jumbotron">
        <div className="container text-center">
          <h1>Welcome to my travel site</h1>
          <p>This site is about places I would like to travel</p>
          <h2>Here are some places I would like to visit</h2>
        </div>
      </div>
    );
  }
}

export default Textual;
