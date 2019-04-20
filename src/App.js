import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld={
      text:'Welcome to the Road to learn React'
    }
    helloWorld.text='Bye Bye React';
    return (
      <div className="App">
        <h2>{helloWorld.text}</h2>
      </div>
    );
  }
}

export default App;
