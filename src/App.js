import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloword='Welcome to the Road to learn React';
    return (
      <div className="App">
        <h2>{helloword}</h2>
      </div>
    );
  }
}

export default App;
