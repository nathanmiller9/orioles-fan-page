import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import News from './components/News/News';
import BSun from './components/News/bsun';
import MASN from './components/News/masn';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Home />
        <MASN />
        <BSun />
        <News />
      </div>
    );
  }
}

export default App;
