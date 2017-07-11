import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
           <div className="navbar-header">
            <div className="navbar-brand">&copy; Travel is fun</div>
          </div>
          <ul className="nav navbar-nav navbar-right">
              <li>
                  <a href="#">Facebook</a>
              </li>
              <li>
                  <a href="#">Twitter</a>
              </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Footer;
