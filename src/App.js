import React, { Component } from 'react';
import './App.css';
import  List from './components/list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SWAPI React Example</h2>
        </div>
      <List />        
      </div>
    );
  }
}

export default App;
