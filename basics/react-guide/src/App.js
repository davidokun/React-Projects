import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
/*     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First React App</h1>
        </header>
      </div>
    ); */

    /* This is the same as the JSX above. It compiles to html */
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Is this working?"));
  }
}

export default App;
