import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Assignment #1</h1>
        </header>

        <UserInput />
        <hr/>
        <UserOutput />
        <UserOutput />
        <UserOutput />

      </div>
    );
  }
}

export default App;
