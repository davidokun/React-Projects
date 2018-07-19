import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First React App</h1>
          <p>This is a new paragraph inside root component</p>
        </header>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );

    /* This is the same as the JSX above. It compiles to html */
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Is this working?"));

    /* JSX Restrictions */
    /* 1. Reserved words. className instead of class. */
    /* 2. Everything must be inside a root component */
  }
}

export default App;
