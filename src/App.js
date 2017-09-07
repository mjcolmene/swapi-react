import React, { Component } from 'react';
import './App.css';
import  Character from './components/character.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SWAPI React Example</h2>
        </div>
      <Character />        
      </div>
    );
  }
}

export default App;
