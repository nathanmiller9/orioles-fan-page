import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PageFinder from './components/PageFinder/PageFinder';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Home />
        <PageFinder />
      </div>
    );
  }
}

export default App;
