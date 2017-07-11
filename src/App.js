import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Screen from './components/screen/Screen';
import Flags from './components/flags/Flags';
import Details from './components/details/Details';
import Textual from './components/textual/Textual';
import Footer from './components/footer/Footer';
import FlagsHolder from './components/flags-holder/FlagsHolder';
import './components/flags/Flags.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Screen />
        <FlagsHolder />
        <Textual />
        <Details />
        <Footer />
      </div>
    );
  }
}

export default App;
