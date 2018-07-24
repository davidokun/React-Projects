import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // Only available in classes that extends Component. Not in function components.
    // If state change, React is prompted to re-render the page
    state = {
        persons: [
            {name: 'David', age: 28},
            {name: 'Andres', age: 25},
            {name: 'Catalina', age: 20}
        ],
        otherState: "Other Value"
    };

    switchNameHandler = () => {
        // Update the state
        this.setState({
            persons: [
                {name: 'Rose', age: 21},
                {name: 'Andres', age: 25},
                {name: 'Catalina', age: 20}
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">First React App</h1>
                    <p>This is a new paragraph inside root component</p>
                </header>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
