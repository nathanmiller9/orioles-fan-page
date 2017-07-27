import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PageFinder from './components/PageFinder/PageFinder';
import News from './components/News/News';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Home />
        <PageFinder />
        <News />
      </div>
    );
  }
}

export default App;
