import React, { Component } from 'react';
import Flags from '../flags/Flags'

class FlagsHolder extends Component {
  render() {
    return (
        <div className="row text-center">
          <Flags country="Spain" tourismSite="http://www.spain.info/en_US/"/>
          <Flags country="Italy" tourismSite="http://www.italia.it/en/home.html"/>
          <Flags country="Aruba" tourismSite="http://www.arubatourism.com/"/>
          <Flags country="Chile" tourismSite="http://chile.travel/en/" />
        </div>
    );
  }
}

export default FlagsHolder;
