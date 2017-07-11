import React, { Component } from 'react';
import './Flags.css';

class Flags extends Component {
  render() {
    return (
      <div id={this.props.country} className="col-md-3 card">
        <h3>{this.props.country}</h3>
        <a href={this.props.tourismSite} target="_blank">{this.props.country} Tourism Site</a>
      </div>
    );
  }
}

export default Flags;
