import React, { Component } from 'react';
import './App.css';
import HomePage from './Home'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
        <Routes/>
      </div>
    );
  }
}

export default App;
